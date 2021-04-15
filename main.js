var images = ["https://www.seekpng.com/png/detail/53-535515_view-original-cool-guy-cartoon-png.png, https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Fpremium-vector%2Fcartoon-young-woman_2889783.htm&psig=AOvVaw0WS_WrS2OMysYKDtLdeNNq&ust=1618616213704000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKiKq7e1gfACFQAAAAAdAAAAABAD,https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fgirl%2Bcartoon&psig=AOvVaw0IkyLbZMwTNi4vpSol781J&ust=1618616934438000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNjQlZC4gfACFQAAAAAdAAAAABAE"
  "https://i.postimg.cc/zBcxWKVc/thata.png"]; 
            var names = [  "Swarna J Raghunath", "A G Raghunath", "Tulasi Raghunath", "K Sharadha", "S Jayaprakash", "Bharathi G", "A G Gurunath"];
            var i = 0;
            function update()
            {
                i++;
                var numbers_of_family_member_in_array = 5
                if(i > numbers_of_family_member_in_array )
                {
                    i = 0;
                }
                var updatedImage = images[i];
                var updatedName  = names[i];
                document.getElementById("family_member_image").src = updatedImage;
                document.getElementById("family_member_name").innerHTML = updatedName;
            }