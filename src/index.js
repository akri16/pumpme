const BACKEND_URL = "http://20.124.190.25/build/";

$(function(){

    $("#url-input").on("input", e => {
        const v = e.target.value.trim();
        let isV = false;

        try {
            const url = new URL(v);
            if ((url.protocol === "http:" || url.protocol === "https:") && url.hostname === "github.com") {
                isV = true;
            }
        } catch (_) { 
            console.log("Invalid URL");
        }
        if (!isV) {
            $("#get-apk-btn").attr('disabled', 'disabled');
        } else {
            $("#get-apk-btn").removeAttr('disabled');
        }
    }); 
    
    $("#get-apk-btn").on("click", (e)=>{
        const url = $("#url-input").val();
        setLoading(true);

        fetch(BACKEND_URL + url).then(res => {
            setLoading(false);
            setStatus(res.ok);
            return res.blob();
        }).then(blob => {
            console.log(blob);
            download(blob);
        }).catch(error => {
            setLoading(false);
            setStatus(false);
            console.error('There has been a problem with your fetch operation:', error);
        });
    });
  
});

function setLoading(isLoading) {
    const loader = $("#loader");
    const btn = $("#get-apk-btn");

    if (isLoading) {
        loader.removeAttr('hidden');
        btn.attr('disabled', 'disabled');
    } else {
        loader.attr('hidden', 'hidden');
        btn.removeAttr('disabled');
    }
}

function setStatus(status) {
    const banner = $("#status");
    banner.removeAttr('hidden');
    if (status) {
        banner.addClass("bg-success");
        banner.removeClass("bg-danger");
        banner.html("The apk is downloading"); 
    } else {
        banner.addClass("bg-danger");
        banner.removeClass("bg-success");
        banner.html("Error compiling resource");
    }
}

function download(blob) {
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "app";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
    URL.revokeObjectURL(url);
}