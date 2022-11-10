// Load Nav Links
function LoadLinks()
{
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = false;

    xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
        //console.log(this.responseText);
        var json = JSON.parse(this.responseText);
        DisplayData(json)
    }
    });

    xhr.open("GET", "https://comp6210-5f5c.restdb.io/rest/scpdatabase");
    xhr.setRequestHeader("content-type", "application/json");
    xhr.setRequestHeader("x-apikey", "630fce882478a234987dd1d6");
    xhr.setRequestHeader("cache-control", "no-cache");

    xhr.send();

    function DisplayData(info)
    {
        var displaytext = "";
        for(var i = 0; i < info.length; i++)
        {
            displaytext += `
            <button onclick="LoadScpFile('${info[i].item}')">${info[i].item}</button>             
            `
        }
        document.getElementById('scpLinks').innerHTML = displaytext
    }
}

// Load SCP file when clicking link
function LoadScpFile(scpName)
{
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = false;

    xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
        //console.log(this.responseText);
        var json = JSON.parse(this.responseText);
        DisplayData(json)
    }
    });

    xhr.open("GET", "https://comp6210-5f5c.restdb.io/rest/scpdatabase");
    xhr.setRequestHeader("content-type", "application/json");
    xhr.setRequestHeader("x-apikey", "630fce882478a234987dd1d6");
    xhr.setRequestHeader("cache-control", "no-cache");

    xhr.send();

    function DisplayData(scpFile)
    {
        var displaytext = "";
        for(var i = 0; i < scpFile.length; i++)
        {
            if(scpFile[i].item == scpName)
            {
                displaytext += `
                <div class="container">
                    <div class="titlePicContainer">
                        <div class="titleContainer">
                            <ul>
                                <li><h1>${scpFile[i].item}</h1></li>
                                <li><h3>Class: ${scpFile[i].class}</h3></li>
                            </ul>
                        </div>
                        <div class="imgContainer">
                            <img src="${scpFile[i].image}" class="scpImg" />
                        </div>
                    </div>
                    <div style="text-align: center">
                        <img src="images/horizontal_line.png" width="90%" height="2px"/>
                    </div>
                    <p><b>Special Containment Procedures: </b>${scpFile[i].containment}</p>
                    <div style="text-align: center">
                        <img src="images/horizontal_line.png" width="90%" height="2px"/>
                    </div>
                    <p><b>Description: </b>${scpFile[i].description}</p>
                </div>
                `
            }
        }
        document.getElementById('scpDiv').innerHTML = displaytext
    }
}