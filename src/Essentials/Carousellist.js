

export const carouselList = [
    {
        src:"https://images.pexels.com/photos/684152/pexels-photo-684152.jpeg?cs=srgb&dl=pexels-athul-adhu-684152.jpg&fm=jpg",
        name:"ADIDAS",
        disc:"Incinerate Walking Shoes For Men"
    },
    {
        src:"https://images.unsplash.com/photo-1518002171953-a080ee817e1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWRpZGFzJTIwc2hvZXN8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
        name:"ADIDAS",
        disc:"Incinerate Running Shoes For Men"
    },
    {
        src:"https://wallpaperaccess.com/full/6324762.jpg",
        name:"PUMA",
        disc:"Incinerate Sports Shoes For Men"
    },
    {
        src:"https://www.pixelstalk.net/wp-content/uploads/images7/Sneaker-HD-Wallpaper-Free-download.jpg",
        name:"NIKE",
        disc:"Incinerate Walking Shoes For Men"
    },
    {
        src:"https://mir-s3-cdn-cf.behance.net/project_modules/1400/2dafc379447009.5cc312fa22dd0.jpg",
        name:"JERSEYS",
        disc:"Men Typography V Neck Polyester Multicolor T-Shirt"
    },
    {
        src:"https://c0.wallpaperflare.com/preview/129/130/329/apparel-attire-blur-boutique.jpg",
        name:"Solstice",
        disc:"Men Regular Fit Solid Spread Collar Casual Shirt"
    },

    {
        src:"https://assets.vogue.in/photos/5f2402e21d33754d11eaf7a2/16:9/pass/kanjeevaram-silk-saree-in-summer.jpg.jpg",
        name:"SAREE",
        disc:"Striped Leheria Chiffon Saree"
    },
    {
        src:"https://images.unsplash.com/photo-1543956872-37cfc5474a71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        name:"LATEST WATCHES",
        disc:"G-SHOCK ( EF-558D-2AVDF ) Analog Watch - For Men ED437"
    },
    {
        src:"https://www.techspot.com/articles-info/685/images/sandisk-extreme-ssd-review.jpg",
        name:"SANDISK SSD",
        disc:"SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s"
    },
    {
        src:"https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmluZ3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
        name:"DEVORA",
        disc:"Adjustable Butterfly silver ring for girls & women Stainless Steel Zircon Sterling Silver Plated Ring Set"
    },
   
]


export function setData(data,dispatch,state){
    if(data === "all"){
      dispatch({
        type:"data-to-show",
        data:state
      })
    }
    else if(data === "men's clothing"){
      dispatch({
        type:"data-to-show",
        data:state.filter((ele) => {
          return ele.category === data
        })
      })
    }
    else if(data === "women's clothing"){
      dispatch({
        type:"data-to-show",
        data:state.filter((ele) => {
          return ele.category === data
        })
      })
    }
    else if(data === "jewelery"){
      dispatch({
        type:"data-to-show",
        data:state.filter((ele) => {
          return ele.category === data
        })
      })
    }
    else if(data === "electronics"){
      dispatch({
        type:"data-to-show",
        data:state.filter((ele) => {
          return ele.category === data
        })
      })
    }
  }

  export function searchFunction(input, dispatch, state) {
    dispatch({
      type: "data-to-show",
      data: state.filter((ele) => {
        return (ele.description).toUpperCase().includes(input.toUpperCase()) ;
      }),
    });
  }


  export const addToCart = (item,dispatch) => {
    dispatch({
      type:"add-to-cart",
      data:item
    })
  } 


  export async function Productslist(dispatch) {
    const api = await fetch("https://fakestoreapi.com/products");
    const response = await api.json();
    dispatch({
      type: "products",
      data: response,
    });
  }