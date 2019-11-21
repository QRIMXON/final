var region1 = [1540, 1130, 1580, 1105];
var region2 = [2010, 1168, 2305, 4102];
var region3 = [2450, 1847, 2710, 2391];
var region4 = [1845, 1491, 1284, 1575];
var region5 = [2120, 1767, 1599, 3888];

var q1Total = 0;
var q2Total = 0;
var q3Total = 0;
var q4Total = 0;


var region1Total = 0;
var region2Total = 0;
var region3Total = 0;
var region4Total = 0;
var region5Total = 0;

var Total = 0;

for(var i = 0;i<4;i++)
{    
    region1Total+= region1[i];
    region2Total+=region2[i];
    region3Total+=region3[i];
    region4Total+=region4[i];
    region5Total+=region5[i];

    if (i == 0) {
        q1Total = region1[i] + region2[i] + region3[i] + region4[i] + region5[i];
    }else if ( i == 1){
        q2Total = region1[i] + region2[i] + region3[i] + region4[i] + region5[i];
    }else if ( i == 2){
        q3Total = region1[i] + region2[i] + region3[i] + region4[i] + region5[i];
    }else if ( i == 3){
        q4Total = region1[i] + region2[i] + region3[i] + region4[i] + region5[i];
    }
}
Total = region1Total + region2Total + region3Total + region4Total + region5Total;

alert("Sales by Qtr\n " +
"Qtr 1: " + q1Total +
"\nQtr 2: " + q2Total +
"\nQtr 3: " + q3Total +
"\nQtr 4: " + q4Total);


alert("Sales by Region\n " +
"Region 1: " + region1Total +
"\nRegion 2: " + region2Total +
"\nRegion 3: " + region3Total +
"\nRegion 4: " + region4Total +
"\nRegion 5: " + region5Total +
"\nTotal : $" + Total);
