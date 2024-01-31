/* Methods */

{
    /* new Map()  */

    // const Data = new Map([
    //     ["option-1" , 20],
    //     ["option-2" , 40],
    //     ["option-3" , 60],
    //     ["option-4" , 80]
    // ])

    // document.getElementById("new").innerHTML = Data.get("option-4");

}

{

    /*  set() */

    // const newmap = new Map();

    // newmap.set("item-1" , "car");
    // newmap.set("item-2" , "bus");
    // newmap.set("item-3" , "truck");
    // newmap.set("item-4" , 50 )

    // document.getElementById("set1").innerHTML =newmap.get("item-2");
    // console.log(newmap);

}

{
    /*  get() */

    // const newmap = new Map([
    //     ["item-1" , "car"],
    //     ["item-2" , "bus"],
    //     ["item-3" , "truck"]
    // ]);

    // newmap.set("item-1" , "truck");

    // document.getElementById("set2").innerHTML = newmap.get("item-1");

}

{
    /* size  */

    // const Data = new Map([
    //     ["option-1" , 20],
    //     ["option-2" , 40],
    //     ["option-3" , 60],
    //     ["option-4" , 80],
    //     ["option-4" , 80]
    // ])
    // const sizes = Data.size;
    // document.getElementById("size").innerHTML =sizes;
}  

{
    /* delete() */

    // const newmap = new Map([
    //     ["item-1" , "car"],
    //     ["item-2" , "bus"],
    //     ["item-3" , "truck"]
    // ]);

    // const deletes = newmap.delete("item-2");
    // document.getElementById("deletes").innerHTML =deletes;
    // document.getElementById("deletes1").innerHTML =newmap.size;
} 

{
    /*  has() */
    
    // const Data = new Map([
    //     ["option-1" , 20],
    //     ["option-2" , 40],
    //     ["option-3" , 60],
    //     ["option-4" , 80]
    // ])
    // const hass = Data.has("option-1");
    // document.getElementById("size1").innerHTML =hass;

    // const hasss = Data.has("option-5");
    // document.getElementById("size2").innerHTML =hasss;
}

{
    const Data = new Map([
        ["option-1" , 20],
        ["option-2" , 40],
        ["option-3" , 60],
        ["option-4" , 80]
    ])
    
    Data.delete("option-4");

    const hasss = Data.has("option-4");
    document.getElementById("has1").innerHTML =hasss;

    document.getElementById("size3").innerHTML =Data.size;
}

/* forEach() */

{
    // const newmap = new Map([
    //     ["item-1" , "car"],
    //     ["item-2" , "bus"],
    //     ["item-3" , "truck"]
    // ]);

    // let mapitem = "";

    // for(const x of newmap.entries()){
    //     mapitem += x + "<br>" ;
    // }

    // document.getElementById("element").innerHTML = mapitem;
}










/* set*/

{
    const x = new Set([10,20,30]);
    console.log(x);
    console.log(x.size);
  }
  
  {
    const x = new Set();
    
    x.add("a");
    x.add("b");
    x.add("c");
  
    console.log(x);
    console.log(x.size);
  }
  
  {
    const newset = new Set();
    
    const a = "a";
    const b = "b";
    const c = "d";
    
    newset.add(a);
    newset.add(b);
    newset.add(c);
  
    console.log(newset);
    console.log(newset.size);
  }
  
  {
    const x = new Set(["a" , "b" , "c"]);
    
    x.delete("a");
  
    console.log(x);
    console.log(x.size);
  }
  
  {
    const x = new Set(["a" , "b" , "c"]);
    
    let y = x.has("d");
  
    console.log(y);
  }
  
  {
    const x = new Set(["a" , "b" , "c"]);
    
    let y = x.values();
  
    console.log(y);
  }