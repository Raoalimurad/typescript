function createCar(manufacturer: string, modelName: string, ...features:any[]) {
    const carInfo= {
      manufacturer: manufacturer,
      modelName: modelName,
    };
  
    for (const feature of features) {
     const [key,value] =Object.entries (feature)[0];
      const[year,values]=Object.entries(feature)[1];
      carInfo[key] = value;
      carInfo[year]= values;
    
     }
  
    return carInfo;
  }
  
  // Calling the function with required and optional information
  const carDetails = createCar("Toyota", "Camry", { color: "Silver", year: 2022 });
  
  // Printing the object to verify the stored information
  console.log(carDetails);
  