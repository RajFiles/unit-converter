// JavaScript to handle the unit conversion

// Conversion logic for Length
const lengthConversions = {
  meters: {
      kilometers: 0.001,
      miles: 0.000621371,
      centimeters: 100,
      meters: 1
  },
  kilometers: {
      meters: 1000,
      miles: 0.621371,
      centimeters: 100000,
      kilometers: 1
  },
  miles: {
      meters: 1609.34,
      kilometers: 1.60934,
      centimeters: 160934,
      miles: 1
  },
  centimeters: {
      meters: 0.01,
      kilometers: 0.00001,
      miles: 0.0000062137,
      centimeters: 1
  }
};

// Conversion logic for Weight
const weightConversions = {
  grams: {
      kilograms: 0.001,
      pounds: 0.00220462,
      ounces: 0.035274,
      grams: 1
  },
  kilograms: {
      grams: 1000,
      pounds: 2.20462,
      ounces: 35.274,
      kilograms: 1
  },
  pounds: {
      grams: 453.592,
      kilograms: 0.453592,
      ounces: 16,
      pounds: 1
  },
  ounces: {
      grams: 28.3495,
      kilograms: 0.0283495,
      pounds: 0.0625,
      ounces: 1
  }
};

// Conversion logic for Temperature
const temperatureConversions = {
  celsius: {
      fahrenheit: (c) => (c * 9/5) + 32,
      kelvin: (c) => c + 273.15,
      celsius: (c) => c
  },
  fahrenheit: {
      celsius: (f) => (f - 32) * 5/9,
      kelvin: (f) => (f - 32) * 5/9 + 273.15,
      fahrenheit: (f) => f
  },
  kelvin: {
      celsius: (k) => k - 273.15,
      fahrenheit: (k) => (k - 273.15) * 9/5 + 32,
      kelvin: (k) => k
  }
};

// Event listener for tab switching
const tabs = document.querySelectorAll(".tab-button");
tabs.forEach(tab => {
  tab.addEventListener("click", () => {
      const category = tab.getAttribute("data-category");
      
      // Hide all unit categories
      document.querySelectorAll(".unit-category").forEach(category => {
          category.classList.remove("active");
      });
      
      // Show the clicked category
      document.querySelector(`.${category}`).classList.add("active");
  });
});

// Event listener for convert button
document.getElementById("convertBtn").addEventListener("click", () => {
    let fromUnit, toUnit, value;
    
    // Get values based on selected category
    const activeCategory = document.querySelector(".unit-category.active");
    
    if (activeCategory.classList.contains("length")) {
        value = parseFloat(document.getElementById("lengthValue").value);
        fromUnit = document.getElementById("lengthFromUnit").value;
        toUnit = document.getElementById("lengthToUnit").value;
        if (isNaN(value)) return;
        const conversionRate = lengthConversions[fromUnit][toUnit];
        const result = value * conversionRate;
        console.log(`Length conversion: ${value} ${fromUnit} to ${toUnit} = ${result}`); // Debugging line
        document.getElementById("result").textContent = `${result} ${toUnit}`;
    } 
    
    else if (activeCategory.classList.contains("weight")) {
        value = parseFloat(document.getElementById("weightValue").value);
        fromUnit = document.getElementById("weightFromUnit").value;
        toUnit = document.getElementById("weightToUnit").value;
        if (isNaN(value)) return;
        
        // Debugging line to check if conversion rates are correct
        console.log(`Weight conversion: ${value} ${fromUnit} to ${toUnit}`);
        console.log(weightConversions[fromUnit][toUnit]); // Check conversion factor
        
        const conversionRate = weightConversions[fromUnit][toUnit];
        const result = value * conversionRate;
        
        console.log(`Result: ${value} ${fromUnit} = ${result} ${toUnit}`); // Debugging line
        document.getElementById("result").textContent = `${result} ${toUnit}`;
    }
    
    else if (activeCategory.classList.contains("temperature")) {
        value = parseFloat(document.getElementById("temperatureValue").value);
        fromUnit = document.getElementById("temperatureFromUnit").value;
        toUnit = document.getElementById("temperatureToUnit").value;
        if (isNaN(value)) return;
        const conversionFunc = temperatureConversions[fromUnit][toUnit];
        const result = conversionFunc(value);
        document.getElementById("result").textContent = `${result} ${toUnit}`;
    }
  });
  
