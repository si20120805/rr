 
 import ADD_CART from './constant'
 
 const cartdata=(data=[],action)=>{

    switch(action.type){
        case  'ADD_CART':

        console.log('in the rreducer',action)
            return [action.data,...data]



            case  'REMOVE_CART':

            console.log('rremove',action.type)
             data.length=data.length ?data.length-1:''
                return [...data]

                case  'EMPTY_CART':

                console.log('rremove',action)
                data=[]
                    return [...data]
            
            default:
                return data 

    }


}

export default cartdata