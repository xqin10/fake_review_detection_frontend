

chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
    let url = tabs[0].url;
    var patt = /(www.tripadvisor.com.*\/(Hotel_Review-|Restaurant_Review-))|(www.yelp.com.*)/g;
    if(patt.test(url)){
        document.getElementById("warning").style
        u = document.getElementById("url");
        u.setAttribute("value", url);
        if(/www.tripadvisor.com.*\/(Hotel_Review-|Restaurant_Review-)/g.test(url)){
            document.getElementById("logo").src = "images/TripAdvisor.svg";
        }else if(/www.yelp.com.*/g.test(url)){
            document.getElementById("logo").src = "images/Yelp.png";
            document.getElementById("logo").width = "100";
        }
    }else{
        document.getElementById("submit").style.display="none";
        document.getElementById("tagline").style.display="none";
        document.getElementById("logo").style.display="none";
        // document.getElementById("warn").innerHTML = "<h2> No the TripAdvisor Hotel/Restaurant Website. </h2>";
        document.getElementById("warning").innerHTML = "This page doesn't appear to be TripAdvisor's Hotel/Restaurant. ";
    }
  });
