var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1962",
        "ok": "1962",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "354",
        "ok": "354",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "32719",
        "ok": "32719",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "16590",
        "ok": "16590",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "10333",
        "ok": "10333",
        "ko": "-"
    },
    "percentiles1": {
        "total": "16415",
        "ok": "16415",
        "ko": "-"
    },
    "percentiles2": {
        "total": "25573",
        "ok": "25573",
        "ko": "-"
    },
    "percentiles3": {
        "total": "32312",
        "ok": "32312",
        "ko": "-"
    },
    "percentiles4": {
        "total": "32658",
        "ok": "32658",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 129,
    "percentage": 7
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 30,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1803,
    "percentage": 92
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "24.222",
        "ok": "24.222",
        "ko": "-"
    }
},
contents: {
"req_auth-fa53b": {
        type: "REQUEST",
        name: "auth",
path: "auth",
pathFormatted: "req_auth-fa53b",
stats: {
    "name": "auth",
    "numberOfRequests": {
        "total": "1962",
        "ok": "1962",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "354",
        "ok": "354",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "32719",
        "ok": "32719",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "16590",
        "ok": "16590",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "10333",
        "ok": "10333",
        "ko": "-"
    },
    "percentiles1": {
        "total": "16415",
        "ok": "16415",
        "ko": "-"
    },
    "percentiles2": {
        "total": "25573",
        "ok": "25573",
        "ko": "-"
    },
    "percentiles3": {
        "total": "32312",
        "ok": "32312",
        "ko": "-"
    },
    "percentiles4": {
        "total": "32658",
        "ok": "32658",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 129,
    "percentage": 7
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 30,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1803,
    "percentage": 92
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "24.222",
        "ok": "24.222",
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
