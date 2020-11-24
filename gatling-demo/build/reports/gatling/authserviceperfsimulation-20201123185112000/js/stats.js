var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1166",
        "ok": "1166",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "352",
        "ok": "352",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4651",
        "ok": "4651",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2465",
        "ok": "2465",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1388",
        "ok": "1388",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2929",
        "ok": "2929",
        "ko": "-"
    },
    "percentiles2": {
        "total": "3385",
        "ok": "3385",
        "ko": "-"
    },
    "percentiles3": {
        "total": "4507",
        "ok": "4507",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4580",
        "ok": "4580",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 245,
    "percentage": 21
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 64,
    "percentage": 5
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 857,
    "percentage": 73
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "22.863",
        "ok": "22.863",
        "ko": "-"
    }
},
contents: {
"req_auth-success-1c9a7": {
        type: "REQUEST",
        name: "auth success",
path: "auth success",
pathFormatted: "req_auth-success-1c9a7",
stats: {
    "name": "auth success",
    "numberOfRequests": {
        "total": "978",
        "ok": "978",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "352",
        "ok": "352",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4644",
        "ok": "4644",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2447",
        "ok": "2447",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1391",
        "ok": "1391",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2913",
        "ok": "2913",
        "ko": "-"
    },
    "percentiles2": {
        "total": "3383",
        "ok": "3383",
        "ko": "-"
    },
    "percentiles3": {
        "total": "4505",
        "ok": "4505",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4581",
        "ok": "4581",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 211,
    "percentage": 22
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 49,
    "percentage": 5
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 718,
    "percentage": 73
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "19.176",
        "ok": "19.176",
        "ko": "-"
    }
}
    },"req_auth-fail-5e48c": {
        type: "REQUEST",
        name: "auth fail",
path: "auth fail",
pathFormatted: "req_auth-fail-5e48c",
stats: {
    "name": "auth fail",
    "numberOfRequests": {
        "total": "188",
        "ok": "188",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "352",
        "ok": "352",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4651",
        "ok": "4651",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2561",
        "ok": "2561",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1369",
        "ok": "1369",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2993",
        "ok": "2993",
        "ko": "-"
    },
    "percentiles2": {
        "total": "3442",
        "ok": "3442",
        "ko": "-"
    },
    "percentiles3": {
        "total": "4514",
        "ok": "4514",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4569",
        "ok": "4569",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 34,
    "percentage": 18
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 15,
    "percentage": 8
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 139,
    "percentage": 74
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "3.686",
        "ok": "3.686",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
