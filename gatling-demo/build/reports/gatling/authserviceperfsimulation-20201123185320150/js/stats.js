var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1174",
        "ok": "1174",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "352",
        "ok": "352",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4907",
        "ok": "4907",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2563",
        "ok": "2563",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1589",
        "ok": "1589",
        "ko": "-"
    },
    "percentiles1": {
        "total": "3095",
        "ok": "3095",
        "ko": "-"
    },
    "percentiles2": {
        "total": "3857",
        "ok": "3857",
        "ko": "-"
    },
    "percentiles3": {
        "total": "4808",
        "ok": "4808",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4877",
        "ok": "4877",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 317,
    "percentage": 27
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 57,
    "percentage": 5
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 800,
    "percentage": 68
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "23.02",
        "ok": "23.02",
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
        "total": "1012",
        "ok": "1012",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "352",
        "ok": "352",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4907",
        "ok": "4907",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2571",
        "ok": "2571",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1582",
        "ok": "1582",
        "ko": "-"
    },
    "percentiles1": {
        "total": "3072",
        "ok": "3072",
        "ko": "-"
    },
    "percentiles2": {
        "total": "3859",
        "ok": "3859",
        "ko": "-"
    },
    "percentiles3": {
        "total": "4805",
        "ok": "4805",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4878",
        "ok": "4878",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 268,
    "percentage": 26
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 52,
    "percentage": 5
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 692,
    "percentage": 68
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "19.843",
        "ok": "19.843",
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
        "total": "162",
        "ok": "162",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "353",
        "ok": "353",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4898",
        "ok": "4898",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2511",
        "ok": "2511",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1627",
        "ok": "1627",
        "ko": "-"
    },
    "percentiles1": {
        "total": "3126",
        "ok": "3126",
        "ko": "-"
    },
    "percentiles2": {
        "total": "3797",
        "ok": "3797",
        "ko": "-"
    },
    "percentiles3": {
        "total": "4819",
        "ok": "4819",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4876",
        "ok": "4876",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 49,
    "percentage": 30
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 5,
    "percentage": 3
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 108,
    "percentage": 67
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "3.176",
        "ok": "3.176",
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
