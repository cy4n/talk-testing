package authservice

import io.gatling.core.Predef._
import io.gatling.core.structure.ScenarioBuilder
import io.gatling.http.Predef._

import scala.concurrent.duration._

class AuthServicePerfSimulation extends Simulation {

  private val httpConfig = http
    .baseUrl("http://localhost:8080") // Here is the root for all relative URLs
    .userAgentHeader("gatling perf test")

  val successfulAuthentication: ScenarioBuilder = scenario("Successful Authenticate")
    .exec(http("auth success")
      .post("/api/authenticate")
      .body(StringBody("""{ "account": "12345", "pass": "hunter2" }""")).asJson
      .check(status.is(200)))

  val failedAuthentication: ScenarioBuilder = scenario("Failed Authenticate")
    .exec(http("auth fail")
      .post("/api/authenticate")
      .body(StringBody("""{ "account": "12345", "pass": "passw0rd" }""")).asJson
      .check(status.is(401)))

  val authenticateCombined: ScenarioBuilder = scenario("Authenticate combo")
    .randomSwitch(
      85.0 -> exec(successfulAuthentication),
      15.0 -> exec(failedAuthentication))

  setUp(
    authenticateCombined.inject(
      rampUsersPerSec(0) to 30 during (10 seconds), // RAMP UP, 3 additional requests per second)
      constantUsersPerSec(30) during(30 seconds) randomized, // 20 requests per second for 30 seconds
      rampUsersPerSec(30) to 0 during (10 seconds)) // RAMP Down, 3 less requests per second
  ).protocols(httpConfig)
    .assertions(
      global.failedRequests.percent.lte(0.05), // under 5% wrong answers
      global.responseTime.percentile4.lte(1000) // 99% of requests answered quicker than 1000ms
    )

}
