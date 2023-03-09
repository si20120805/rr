export const addcart=(data)=>{

    console.log( 'actionss',data)

    return {
        type:'ADD_CART',
        
        data:data
    }
  
}


export const removetocart=(data)=>{

    console.log( 'removecart',data)

    return {
        type:'REMOVE_CART',
        
        data:data
    }
  
}
export const emptcart=(data)=>{

    console.log( 'emptycart',data)

    return {
        type:'EMPTY_CART',
        
      
    }
  
}






