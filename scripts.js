// Author  : Watson biard
// Email   : w.biard1234@gmail.com
// InitDate: 07/02/2020 03:51pm
// Date    : 07/02/2020 03:51pm
// license : MIT


// _______________javascript Code starts here__________________

function load(){

    console.log("Welcome to SpeedCss Open Project");

}


function randomColor(){

    var colorList = ["#008000","#008080","#008B8B","#00BFFF","#00CED1","#00FA9A","#00FF00","#00FF7F",
    "#00FFFF","#00FFFF","#191970","#1E90FF","#20B2AA","#228B22","#2E8B57","#2F4F4F","#2F4F4F","#32CD32",
    "#3CB371","#40E0D0","#4169E1","#4682B4","#483D8B","#48D1CC","#4B0082","#556B2F","#5F9EA0","#6495ED",
    "#663399","#69969","#696969","#6A5ACD","#6B8E23","#708090","#708090","#778899","#778899","#7B68EE",
    "#7CFC00","#7FFF00","#7FFFD4","#800000","#800080","#808000","#808080","#808080","#87CEEB",
    "#87CEFA","#8A2BE2","#8B0000","#8B008B","#8B4513","#8FBC8F","#90EE90","#9370DB","#9400D3","#98FB98",
    "#9932CC","#9ACD32","#A0522D","#A52A2A","#A9A9A9","#A9A9A9","#ADD8E6","#ADFFF","#AFEEEE","#B0C4DE",
    "#B0E0E6","#B22222","#B8860B","#A55D3","#BC8F8F","#BDB76B","#C0C0C0","#C71585","#CD5C5C","#CD853F",
    "#D2691E","#D2B48C","#D3D3D3","#D8BD8","#DA70D6","#DAA520","#DB7093","#DC143C","#DCDCDC",
    "#DDA0DD","#DEB887","#E0FFFF","#E6E6FA","#E9967A","#EE82EE","#EEE8AA","#F08080","#F0E68C","#F0F8FF",
    "#F0FFF0","#F0FFFF","#F4A460","#F5DEB3","#F5F5DC","#F5F5F5","#F5FFFA","#F8F8FF","#FA8072","#FAEBD7",
    "#FAF0E6","#FAFAD2","#FDF5E6","#FF0000","#FF00FF","#FF0FFF","#FF1493","#FF4500","#FF6347","#FF69B4",
    "#FF7F50","#FF8C00","#FFA07A","#FFA500","#FFB6C1","#FFC0CB","#FFD700","#FFDAB9","#FFDEAD","#FFE4B5",
    "#FFE4C4","#FFE4E1","#FFEBCD","#FFEFD5","#FFF0F5","#FFF5EE","#FFF8DC","#FFFACD","#FFFAF0","#FFFAFA",
    "#FFFF00","#FFFFE0","#FFFFF0","#FFFFFF","#35284A","#816F90","#FB7D79","#FB9D7E","#F8CD9E","#FBFBFB",
    "#E0E4D6","#60CAAD","#444444","#9DA5A2","#FFFFFF","#363671","#3E5196","#EE537C","#EB927B","#FCFEF9",
    "#EAF5D2","#283B51","#","81A76A","#82CC00","#2C5E9E","#F6F8F8","#1E3D6B","#D7DDE2","#5995DD","#FEFCFA",
    "#B7BEC9","#45058","#F5DCD1","#F0BDBD","#110D23","#FFEBCF","#987583","#AEC8DA","#F2F9FD","#FFFFFF",
    "#2374F","#E7F2C9","#82CC00","#819E83","#FFFFFF","#A9E2E4","#418B8D","#DAEBEB","#E8E963","#FEEFE",
    "#FFB3D0","#535369","#D8CBD7","#B7B7CB","#FCFDFD","#E7D5E3","#767892","#A0B1DE","#FD3D9","#FFFFFF",
    "#00CCCC","#FF5E3E","#2C8182","#FCCC3A","#1FBCD3","#CBE2B4","#F7BFA8","#F66CA","#9BD5BD","#FFFFFF",
    "#2C2E3E","#155B92","#CC4635","#F9DBC4","#FF715A","#4B47A8","#FEBD2","#7FC4F3","#FCFAF8","#EDF4F7",
    "#DFEDF3","#FF6276","#525252","#A1A4A5","#FDFCFC","#E64CB","#F3AD4D","#5F422F","#F8C989","#2D3630",
    "#868B86","#FDFEFD","#CCD0CE","#A0A6A3","#F69F6","#3A5A55","#EC747C","#80A28F","#94C5A2","#F8F9FB",
    "#1A476B","#1B69A3","#D3D5D6","#387C7","#1E0162","#6B4180","#FFA401","#FFF106","#FECF14","#F7F3ED",
    "#3C2355","#7ACBC5","#DC3D8","#7E57A4","#FDFEFF","#3D3638","#DFE1E7","#2C7ECC","#3369AA","#FDFDFD",
    "#586172","#D6DDB","#87C94C","#A7ACB5","#FCC918","#4A3B05","#FBA737","#D0F1D9","#A08A3D","#242424",
    "#6C7EE","#5C7F91","#F42C71","#62E73D","#1CB0BC","#FFFFFF","#FEF201","#178188","#CDE9E9","#FFE42",
    "#204444","#679A9A","#909A92","#C9601A","#030303","#FEFEFE","#E2E0E0","#8A8887","#A4AA3","#6BA4F8",
    "#567BF5","#F5F7FB","#89C4F3","#566773","#CD483F","#888C67","#E89B8D","#FFFFFF","#281C49","#FFB905",
    "#D87978","#31CEC1","#EFEFEF","#91A7A1","#8CCAB9","#80C1A","#D4E7E2","#FEFEFE","#DCF0F8","#519DAE",
    "#467380","#C9D6DC","#493B68","#EF675F","#F4A2A","#9287A1","#FCFAFA","#5573AA","#FFFFFF","#FC4D66",
    "#D79827","#EAA769","#88D2C5","#FEFEF","#387497","#D2E8E7","#AEE4E1","#38103F","#7F5A7B","#2491CC",
    "#F0592A","#D53F28","#FFFFFF","#F8E620","#A9CF33","#F29228","#689D79","#FEFEFE","#DADFE4","#235180",
    "#FEC22E","#F99B2E","#B2D2F","#FDFDFD","#F45252","#9D4242","#9FA0A1","#2ECEFF","#295585","#9FCFEB",
    "#FFFFFF","#47AA3","#C9004B","#F3166C","#B10142","#FDF8F4","#EDD3D4","#FFFFFF","#5E5E5E","#50CBCB",
    "#AAAAA","#CED3D3","#3E3F41","#8C8C8C","#24BE55","#F7F7F7","#519662","#445E92","#3F5485","#FFEFE",
    "#03A8FD","#7AD0FD","#FFFFFF","#242478","#3981C1","#234D9F","#E7E2D1","#242222","#F1C24","#EBECED",
    "#9C1E23","#CE1D24","#222D47","#CC4261","#9F599C","#7D8CDC","#F0F2F3","#0192C","#F26153","#A14946",
    "#F4FBF5","#F4C1B4"];

   var ranCol = colorList[Math.floor(Math.random()*385)];
    return ranCol;
}


//change background color and text color automatically




function changeColor(){        
    var ht = document.getElementById("ht");
    var bg = document.getElementById("main");

    ht.style.color = randomColor();
    console.log(ht);
    bg.style.backgroundColor = randomColor();
    console.log(ht);

    }