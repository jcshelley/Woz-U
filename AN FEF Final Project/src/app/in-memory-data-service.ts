import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const TASKS = [
            { id: 11, name: 'Groceries', place: 'Safeway', phone: '555.789.4455', message: 'Milk, Eggs, Butter' },
            { id: 12, name: 'Car Repair', place: 'Garage', phone: '555.453.8524', message: 'CV boots'},
            { id: 13, name: 'Water Store', place: 'Ambrosia', phone: '555.453.6891', message: '40 gallons'},
            { id: 14, name: 'Sundries', place: 'Drug Store', phone: '555.455.1245', message: 'Deoderant and Shampoo'},
            { id: 15, name: 'Medications', place: 'Drug Store', phone: '555.455.1245', message: 'None - thankfully'},
            { id: 16, name: 'Vacation', place: 'Travel Agency', phone: '555.676.2589', message: 'Book Get-away'},
            { id: 17, name: 'School Lunch', place: 'Woodside', phone: '555.256.7418', message: 'Pay for both kids for the Month'},
            { id: 18, name: 'Game Day', place: 'Safeway', phone: '555.789.4455', message: 'Beer and snacks'},
            { id: 19, name: 'Work Supplies', place: 'Graybar', phone: '555.824.9134', message: 'Pliers and wire'},
            { id: 20, name: 'Homework', place: 'EMCC', phone: '555.789.3258', message: 'Project due 9/1/2018!'},
          ];
          return {TASKS};
    }
}
