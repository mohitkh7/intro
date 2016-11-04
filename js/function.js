// This is a JS file for User Defined Functions.
var p=[];
var a=[];
var i=[];
var list_present=[];
var list_absent=[];
var list_ignore=[];

//This is to reset Data
function reset()
{
    var p=[];
    var a=[];
    var i=[];
    var list_present=[];
    var list_absent=[];
    var list_ignore=[];
    document.getElementById('rollno').innerHTML=1;
    window.open('index.html','_self')
}

//This will work on click on either button
function record(ty)
{
    var r=parseInt(document.getElementById('rollno').innerHTML);
    if(ty=='p')
    {
        p.push(r);
    }
    if(ty=='a')
    {
        a.push(r);
    }
    if(ty=='i')
    {
        i.push(r);
    }
    r+=1;
    document.getElementById('rollno').innerHTML=r;
}

function printResult()
{
    var total_students=p.length+a.length+i.length;

    if(p.length>0)
        var list_present="<div class='list'>Roll No: { "+p.join(", ")+" }</div>";
    else
        var list_present="";

    if(a.length>0)
        var list_absent="<div class='list'>Roll No: { "+a.join(", ")+" }</div>";
    else
        var list_absent="";

    if(i.length>0)
        var list_ignore="<div class='list'>Roll No: { "+i.join(", ")+" }</div>";
    else
        var list_ignore="";

    document.getElementById('result').innerHTML =
        "Total Students : <b>" + total_students+ "</b>"+
        "<br /><br />"+
        "Present Students : <b>" + p.length+ "</b>"+
        "<br />"+
        list_present+
        "<br />"+
        "Absent Students : <b>" + a.length+ "</b>"+
        "<br />"+
        list_absent+
        "<br />"+
        "Ignored Students : <b>" + i.length+ "</b>"+
        "<br />"+
        list_ignore+
        "<br />";

}

// function to save data in localStorage
var details={

    key:Date(),
    s_name:"",
    t_name:"",
    p_list:list_present,
    a_list:list_absent,
    i_list:list_ignore

};
function save()
{
    var dat=new Date();
    details={

    key:Date(),
    dt:dat.toDateString(),
    s_name:document.getElementById('s_name').value,
    t_name:document.getElementById('t_name').value,
    p_list:p.join(", "),
    a_list:a.join(", "),
    i_list:i.join(", ")

    };
    localStorage.setItem(dat,JSON.stringify(details));
    myApp.alert('','Attendence Saved');
    reset();
}
function showAll()
{
    var x=0;
    var len = localStorage.length;
    var tempString,finalString="";
    if(len==0)
    {
        document.getElementById('showSingle').innerHTML="<div class='content-block'>No Saved Attendence</div>";
    }
    else
    {
       
        for ( x = len-1; x >=0; --x ) 
        {
            var obj= JSON.parse(localStorage.getItem( localStorage.key( x ) ));
            tempString=
            '<li>'+
                '<a href="showone.html?key='+obj.key+'" class="item-link item-content">'+
                    '<div class="item-inner">'+
                        '<div class="item-title-row">'+
                            '<div class="item-title">'+obj.s_name+'</div>'+
                            '<div class="item-after">'+obj.dt+'</div>'+
                        '</div>'+
                        '<div class="item-subtitle">'+obj.t_name+'</div>'+
                    '</div>'+
                '</a>'+
            '</li>';
            finalString=finalString.concat(tempString);
        }
        document.getElementById('showSingle').innerHTML=
        '<div class="list-block media-list">'+
            '<ul>'+finalString+'</ul>'+
        '</div>';

    }
    


}
function showOne()
{
    var k=showOneKey;

    var obj= JSON.parse(localStorage.getItem( localStorage.key( k ) ));

    // Calculation
    var total_students=obj.p_list.length+obj.a_list.length+obj.i_list.length;
    if(obj.p_list.length>0)
        var list_present="<div class='list'>Roll No: { "+obj.p_list+" }</div>";
    else
        var list_present="";

    if(obj.a_list.length>0)
        var list_absent="<div class='list'>Roll No: { "+obj.a_list+" }</div>";
    else
        var list_absent="";

    if(obj.i_list.length>0)
        var list_ignore="<div class='list'>Roll No: { "+obj.i_list+" }</div>";
    else
        var list_ignore="";

    

    document.getElementById('showOne').innerHTML=
        "Subject Name : <b>"+obj.s_name+
        "</b><br/>Faculty Name : <b>"+obj.t_name+
        "</b><br/>Date : <b>"+obj.dt+
        "</b><br/>Details : <br /><br />"+
        "Total Students : <b>" + total_students+ "</b>"+
        "<br /><br />"+
        "Present Students : <b>" + obj.p_list.length+ "</b>"+
        "<br />"+
        list_present+
        "<br />"+
        "Absent Students : <b>" + obj.a_list.length+ "</b>"+
        "<br />"+
        list_absent+
        "<br />"+
        "Ignored Students : <b>" + obj.i_list.length+ "</b>"+
        "<br />"+
        list_ignore+
        "<br />";            
}

function remove()
{
    var k=showOneKey;
    var obj= JSON.parse(localStorage.getItem( localStorage.key( k ) ));
    localStorage.removeItem(obj.key);
    myApp.alert('','Attendence Deleted');
    mainView.router.loadPage('index.html');
}
/*
localStorage.removeItem('us');
delete window.localStorage["us"];
*/