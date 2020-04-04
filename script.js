fetch("http://zuzka.dk/bikes/wp-json/wp/v2/bike?_fields=title.rendered,price,color,instock,image,id,brand")
    .then(res => res.json())
    .then(getData)

function getData(data) {
    console.log(data);
    data.reverse();
    data.forEach(showData);
}

function showData(bike) {

    const template = document.querySelector("template").content;

    var aCopy = template.cloneNode(true);

    aCopy.querySelector(".brand-title").textContent = bike.brand;
    aCopy.querySelector(".title").textContent = bike.title.rendered;

    aCopy.querySelector(".bike_img").src = bike.image.guid;
    aCopy.querySelector(".price").textContent = bike.price;

    aCopy.querySelector(".stock").textContent = bike.instock;

    if (bike.color.includes("#")) {
        bikeColors = bike.color.split(", ");
        console.log(bikeColors);

        bikeColors.forEach(color => {
            const col = document.createElement("div");
            col.style.background = color;
            col.style.width = "20px";
            col.style.height = "20px";
            col.style.marginRight = "5px";
            aCopy.querySelector(".color").appendChild(col);
        })
    } else {
        aCopy.querySelector(".color").textContent = bike.color;
    }

    document.querySelector("main").appendChild(aCopy);
}

