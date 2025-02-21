import inquirer from 'inquirer';

async function createVehicle() {
    try {
        // Prompt user to choose between crafting new or existing vehicle
        const answers = await inquirer.prompt([
            {
                type: 'list',
                name: 'vehicleChoice',
                message: 'Would you like to craft a new vehicle or select an existing one?',
                choices: ['Craft a New Vehicle', 'Select Existing Vehicle']
            }
        ]);

        console.log('Your choice:', answers.vehicleChoice);

        // a vehicle type variable to keep track of the crafted or selected vehicle
        let vehicleType = '';

        // If the user chooses to craft a new vehicle
        if (answers.vehicleChoice === 'Craft a New Vehicle') {
            const vehicleTypeAnswer = await inquirer.prompt([
                {
                    type: 'list',
                    name: 'vehicleType',
                    message: 'Select what type of vehicle you want to craft:',
                    choices: ['Car', 'Truck', 'Motorbike']
                }
            ]);

            vehicleType = vehicleTypeAnswer.vehicleType;
            console.log('You have chosen to craft a new vehicle:', vehicleType);

            // prompts based on vehicle type
            if (vehicleType === 'Car') {
                const carDetails = await inquirer.prompt([
                    {
                        type: 'input',
                        name: 'color',
                        message: 'What color would you like your car to be?'
                    },
                    {
                        type: 'input',
                        name: 'engineType',
                        message: 'What type of engine does your car have? (e.g., V8, electric)'
                    }
                ]);
                console.log('Your new car details:', carDetails);
            } else if (vehicleType === 'Truck') {
                const truckDetails = await inquirer.prompt([
                    {
                        type: 'input',
                        name: 'loadCapacity',
                        message: 'What is the load capacity of your truck? (e.g., 5 tons)'
                    }
                ]);
                console.log('Your new truck details:', truckDetails);
            } else if (vehicleType === 'Motorbike') {
                const motorbikeDetails = await inquirer.prompt([
                    {
                        type: 'input',
                        name: 'engineSize',
                        message: 'What is the engine size of your motorbike? (e.g., 600cc)'
                    }
                ]);
                console.log('Your new motorbike details:', motorbikeDetails);
            }

        } else {
            
            console.log('You chose to select an existing vehicle.');
            
            const existingVehicle = await inquirer.prompt([
                {
                    type: 'list',
                    name: 'vehicleID',
                    message: 'Select an existing vehicle from your collection:',
                    choices: ['Vehicle 1', 'Vehicle 2', 'Vehicle 3']  // Replace with dynamic list
                }
            ]);
            console.log('You selected:', existingVehicle.vehicleID);
            vehicleType = 'Existing Vehicle';  // Placeholder for existing vehicle
        }

        // After the vehicle is crafted or selected, ask for actions drive, reverse, park
        await vehicleActions();

    } catch (error) {
        console.error('Error:', error);
    }
}

async function vehicleActions() {
    try {
        // Ask user to choose an action for the vehicle
        const action = await inquirer.prompt([
            {
                type: 'list',
                name: 'action',
                message: 'What would you like to do with your vehicle?',
                choices: ['Drive', 'Reverse', 'Park']
            }
        ]);

        console.log('You chose to:', action.action);

        // Action and Steps
        switch (action.action) {
            case 'Drive':
                console.log('The vehicle is now driving!');
                break;
            case 'Reverse':
                console.log('The vehicle is reversing!');
                break;
            case 'Park':
                console.log('The vehicle is parked!');
                break;
            default:
                console.log('Unknown action.');
                break;
        }

    } catch (error) {
        console.error('Error during vehicle action:', error);
    }
}

// Run function
createVehicle();
