
$(document).ready(function(){
   	$("#pie").hide();
	$("#bar").hide();
	$("#pie2").hide();
    $("#Chart2").click(function() {

    $(".active").removeClass("active");
    $(this).addClass("active");
    $("#StateWise").hide();
    $("#pie").show();
    $("#bar").hide();
	$("#pie2").hide();
	});
   $("#Chart3").click(function() {

    $(".active").removeClass("active");
    $(this).addClass("active");
    $("#StateWise").hide();
    $("#pie").hide();
    $("#bar").show();
    $("#pie2").hide();
    

});
   $("#Chart1").click(function() {

    $(".active").removeClass("active");
    $(this).addClass("active");
    $("#StateWise").show();
    $("#pie").hide();
    $("#bar").hide();
	$("#pie2").hide();
});
   $("#Chart4").click(function(){
   $(".active").removeClass("active");
    $(this).addClass("active");
    $("#StateWise").hide();
    $("#pie").hide();
    $("#bar").hide();
    $("#pie2").show();
    
});
});
$(function () {
    $('#pie').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: 'Gender Wise Aadhar card distribution'
        },
        tooltip: {
            pointFormat: 'Gender Wise Aadhar Card: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.4f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            type: 'pie',
            name: 'Gender Distribution of Aadhar Card',
            data: [
                ['Male',   50.9904],
                ['Female',       49.0081],
                ['Transsexual', 0.0011],
               
            ]
        }]
    });
});
$(function () {
    $('#bar').highcharts({
       chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false
        },
        title: {
            text: 'Age Wise',
            align: 'center',
            verticalAlign: 'middle',
            y: 50
        },
        tooltip: {
            pointFormat: 'Age Group: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: true,
                    distance: -50,
                    style: {
                        fontWeight: 'bold',
                        color: 'white',
                        textShadow: '0px 1px 2px black'
                    }
                },
                startAngle: -90,
                endAngle: 90,
                center: ['50%', '75%']
            }
        },
        series: [{
            type: 'pie',
            name: 'Age Wise Aadhar Card Distribution',
            innerSize: '50%',
            data: [
                ['0 to 4 Years',   43967],
                ['5 to 17 Years',      197168],
                ['18 to 30 Years', 229784],
                ['31 to 45 Years',    167962],
                ['46 to 65 Years',     128420],
                ['66 years and Above', 30746],
                {
                    name: 'Others',
                    y: 0.7,
                    dataLabels: {
                        enabled: false
                    }
                }
            ]
        }]
    });
});

$(function () {
    $('#pie2').highcharts({
                chart: {
            type: 'column',
           	width: 950
        },
        title: {
            text: 'Aadhar Card Generating Agencies'
        },
        xAxis: {
            type: 'category',
            labels: {
                rotation: -45,
                style: {
                	color: '#000000',
                    fontSize: '10px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'No Of Aadhar Cards generated'
            }
        },
        legend: {
            enabled: false
        },
        tooltip: {
            pointFormat: 'No. Of Aadhar Cards generated: <b>{point.y:.1f} </b>'
        },
        series: [{
            name: 'Population',
            data: [
                ['DENA BANK', 185579],
           		 ['Indiapost', 0],
            	['Jharkhand', 1],
            	['Union Bank', 21949],
            	['Canara Bank', 34305],
            	['Bank Of India', 12301],
            	['IDBI Bank ltd', 853],
            	['Allahabad Bank', 28928],
            	['Bank of Baroda', 90],
            	['Govt of Kerala', 2054],
            	['Govt of Gujarat', 3715],
            	['UIDAI-Registrar', 42],
            	['FCS Govt of Punjab', 2690],
            	['Govt of Karnataka', 1274]
            	['Bank of Maharashtra',537],
				['FCR Govt of Haryana',2439],
				['Govt of Maharashtra',844],
				['RDD Govt of Tripura',11],
				['State Bank of India',1571],
				['Punjab National Bank',10184],
				['Punjab and Sind Bank',881],
				['Central Bank of India',0],
				['Govt of Andhra Pradesh',0],				
				['Govt of Himachal Pradesh',18],
				['Oriental Bank of Commerce',1],
				['Civil Supplies - A&N Islands',188],
				['Registrar General India BEL2',25640],
				['Registrar General India ECIL',21146],
				['Dept of ITC Govt of Rajasthan',7951],							
				['Registrar General India - BEL',959],
				['Govt of Sikkim - Dept of Econo',13],
				['Registrar General of India ITI',13210],
['State Bank of Bikaner & Jaipur',0],
['Rural Development Dept  Govt. of Bihar',13668],
['CSC e-Governance Services India Limited',192773],
['NSDL e-Governance Infrastructure Limited',200122],
['Project Coordinator UID Project Madhya Pradesh',8069],
['UTI Infrastructure Technology & Services Limited',348],
['Information Technology & Communication Department',1834],
['Atalji Janasnehi Directorate  Government of Karnataka',1859],
['Department of Information Technology Govt of Jharkhand',0],

            ],
            dataLabels: {
                enabled: true,
                rotation: -90,
                color: '#FFFFFF',
                align: 'right',
                format: '{point.y:.0f}', 
                y: -20, 
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        }]
    });
});
