var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1239",
        "ok": "1239",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "352",
        "ok": "352",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "7595",
        "ok": "7595",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "3630",
        "ok": "3630",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2409",
        "ok": "2409",
        "ko": "-"
    },
    "percentiles1": {
        "total": "3625",
        "ok": "3625",
        "ko": "-"
    },
    "percentiles2": {
        "total": "5763",
        "ok": "5763",
        "ko": "-"
    },
    "percentiles3": {
        "total": "7410",
        "ok": "7410",
        "ko": "-"
    },
    "percentiles4": {
        "total": "7518",
        "ok": "7518",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 195,
    "percentage": 16
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 45,
    "percentage": 4
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 999,
    "percentage": 81
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "22.944",
        "ok": "22.944",
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
        "total": "1019",
        "ok": "1019",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "352",
        "ok": "352",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "7595",
        "ok": "7595",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "3632",
        "ok": "3632",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2408",
        "ok": "2408",
        "ko": "-"
    },
    "percentiles1": {
        "total": "3633",
        "ok": "3633",
        "ko": "-"
    },
    "percentiles2": {
        "total": "5718",
        "ok": "5718",
        "ko": "-"
    },
    "percentiles3": {
        "total": "7406",
        "ok": "7406",
        "ko": "-"
    },
    "percentiles4": {
        "total": "7518",
        "ok": "7518",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 163,
    "percentage": 16
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 39,
    "percentage": 4
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 817,
    "percentage": 80
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "18.87",
        "ok": "18.87",
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
        "total": "220",
        "ok": "220",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "354",
        "ok": "354",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "7555",
        "ok": "7555",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "3620",
        "ok": "3620",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2414",
        "ok": "2414",
        "ko": "-"
    },
    "percentiles1": {
        "total": "3583",
        "ok": "3583",
        "ko": "-"
    },
    "percentiles2": {
        "total": "5849",
        "ok": "5849",
        "ko": "-"
    },
    "percentiles3": {
        "total": "7412",
        "ok": "7412",
        "ko": "-"
    },
    "percentiles4": {
        "total": "7513",
        "ok": "7513",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 32,
    "percentage": 15
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 6,
    "percentage": 3
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 182,
    "percentage": 83
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "4.074",
        "ok": "4.074",
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
