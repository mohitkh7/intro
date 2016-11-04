// This JS file store Bus details in it.
var bbusRouteList=[];
var busStopList=[];
var busDetails=[
				{
					no: 5,
					stops: ["Arvindo","M.R. 10","Sukhliya","Bapat Chuo.","Meghdut Garden","Sayaji","Vijay Nagar","S.S. Chour.","Bombay Hospital","Malviya P. Pump","Barfani Ashram","Khajrana Sq.","Bangali Sq.","Piplyahana","Shanti Nagar","Musa Kheadi","Teen Eamali Palda","Nemavar Road","Asha Ram Bapu Sq.","Bhawar Kuva","Rajiv Gandhi Sq.","Choithram","Manik Bagh Bridge","Palsikar","Collectorate","Gdc","Mhow Naka"],
					start: 	"Arvindo",
					end: "Mhow Naka",	//stops[this.stops.length()-1],
					show : function()
					{
						document.write("Details : ",this.no," ",this.start," ",this.end,"<br />",this.stops.join(", "));
					}
				},
				{
					no: 7,
					stops: ["Gandhi Nagar","Bijasan Central School","Airport","Panch Sheel","Vidhya Dham","Kalani Nagar","Shikshak Nagar","Tirupati Nagar","Wireless T/Aptc","Bada Ganpati","Antim Chauraha","Rajmohlla","Gangwal Bus Stand","Vaishnav Polytechnic","Mhow Naka","Lal Bagh","Gdc","Collectorate","Juni Indore","Sindhi Colony","Tower Chauraha","Bhawar Kuva","Davv","Aasaram Bapu Chauraha","Radhaswami (Bilawali)","Machli Farm","Tejaji Nagar"],
					start: 	"Gandhi Nagar",
					end: "Tejaji Nagar",	//stops[this.stops.length()-1],
					show : function()
					{
						document.write("Details : ",this.no," ",this.start," ",this.end,"<br />",this.stops.join(", "));
					}
				},
				{
					no: 11,
					stops: ["Gomat Giri","Nayabasera","Gandhi Nagar","B.C.School","Air Port","Panch Sheel","Vidhya Dham","Kalani Nagar","Shikshak Nagar","Triphti Nagar","Wlaptc","Bada Ganpati","Antim Chauraha","Raj Mohalla","Malganj","Narsingh Chouraha","Pipli Bazar","Imlisahab Gurudwara","Nandlal Pura","Nagar Nigam","Sikh Mohalla","Gandhi Hall","Regal","Station","Madhumilan","M.Y.Hospital","White Church","G.P.O","Zoo","Navlakha","Holkar College","Bhawar Kua","Davv","Asharam Bapu Chouraha","Iet/Sopa","Ranjeet College","Radha Swami","Ashram","Power House","Machli Farm","Pushpkunj","Kasturba","Tejaji Nagar"],
					start: 	"Gomat Giri",
					end: "Tejaji Nagar",	//stops[this.stops.length()-1],
					show : function()
					{
						document.write("Details : ",this.no," ",this.start," ",this.end,"<br />",this.stops.join(", "));
					}
				}
				];
function fillBusRouteList()
{
	if(bbusRouteList.length==0)
		for(var i in busDetails)
		{
			bbusRouteList.push(busDetails[i].no.toString());
		}
}

