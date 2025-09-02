const showBlog = [
  {
    image:
      "./image/The_Dos_Don_ts_of_Skincare_During_the_Rainy_Season_6ec067ea-fb90-48fd-8a70-ef1dcc18465c_1100x.webp",
    name: "The Dos & Don’ts of Skincare During the Rainy Season",
    url: "#",
    p:"When the rains finally hit, we all feel sigh of relief and bid our goodbyes to those sweaty summer days. While we imagine ourselves dancing freely in the rain, our skin doesn’t feel that comfortable in the changing weather. Our ",
  },{
image:"./image/Monsoon_Sunscreen_Guide_How_to_Choose_SPF_for_Humid_Cloudy_Days_1100x.webp",
name:"Monsoon Sunscreen Guide: How To Choose SPF For Humid, Cloudy Days",
url:"#",
p:"As the monsoon season brings relief from the scorching summer heat, it also brings with it a hatful of skincare concerns. Amidst cloudy skies and constant humidity, sunscreen is something that often gets pushed aside",
  },
  {
    image:"./image/cream.webp",
    name:"Things You Must Know Before Choosing The Best Sunscreen for Acne-Prone Skin",
    url:"#",
    p:"If you have got acne-prone skin, sunscreen is either something you avoid or something you dread applying on your skin. One wrong formula and suddenly your face feels greasy, your pores feel heavy or unexpected breakouts",

  }
];

function Blog() {
  return (
    <div className="container mt-5">
      <h3 className="text-center mb-4">CHECK OUT OUR TOP BLOGS</h3>
    <div class="container text-center">
      {/* <div class="row"> */}
        <div class="d-flex gap-3">
        {showBlog.map((img, index) => (
          <div key={index} className=" card text-center">
            <img
              src={img.image}
              alt={img.name}
              width="355px"
              height="180px"
              className=" shadow-sm"
            />
            <a href={img.url} className="text-decoration-none text-dark">
              <p className="mt-2">{img.name}</p>
              
            </a>
            <p>{img.p}</p>
               <a href="#" className="text-decoration-none text-dark btn active m-3">View more</a>
          </div>
          
        ))}
        </div>
        </div>`
                                                                                                                                                                                    
      </div>
  );
}

export default Blog;
