export interface AutocompleteOption {
    id: string;
    name: string;
  }
  
  export const DEPARTMENTS = [
    {
      id: '1',
      name: 'Marketing',
    },
    {
      id: '2',
      name: 'Sales',
    },
    {
      id: '3',
      name: 'Engineering',
    },
    {
      id: '4',
      name: 'Customer Support',
    },
  ];
  
  export const JOB_TITLES: Record<string, AutocompleteOption[]> = {
    Marketing: [
      {
        id: '1',
        name: 'Social Media Coordinator',
      },
      {
        id: '2',
        name: 'Blog Manager',
      },
      {
        id: '3',
        name: 'Events Manager',
      },
    ],
    Sales: [
      {
        id: '4',
        name: 'Business Development Representative',
      },
      {
        id: '5',
        name: 'Account Executive',
      },
    ],
    Engineering: [
      {
        id: '6',
        name: 'Software Engineer',
      },
      {
        id: '7',
        name: 'Senior Software Engineer',
      },
      {
        id: '8',
        name: 'Principal Software Engineer',
      },
      {
        id: '9',
        name: 'UX Designer',
      },
      {
        id: '10',
        name: 'Product Manager',
      },
    ],
    'Customer Support': [
      {
        id: '11',
        name: 'Customer Support Representative',
      },
      {
        id: '12',
        name: 'Team',
      },
      {
        id: '13',
        name: 'Customer Support Specialist',
      },
    ],
  };
  
  export interface AgGridRow {
    selected?: boolean;
    name: string;
    age: number;
    startDate: Date;
    endDate?: Date;
    department: AutocompleteOption;
    jobTitle?: AutocompleteOption;
  }
  
  export const AG_GRID_DATA = [
    {
      name: 'Brandon Pasquarelli',
      age: 55,
      startDate: new Date('12/1/1994'),
      department: DEPARTMENTS[3],
      jobTitle: JOB_TITLES['Engineering'][2],
    },
    {
      name: 'Jerad Cho',
      age: 33,
      startDate: new Date('7/15/2025'),
      department: DEPARTMENTS[3],
      jobTitle: JOB_TITLES['Engineering'][1],
    },
    {
      name: 'Darrik Marstaller',
      age: 38,
      startDate: new Date('9/1/2017'),
      endDate: new Date('9/30/2017'),
      department: DEPARTMENTS[1],
      jobTitle: JOB_TITLES['Customer Support'][2],
    },
    {
      name: 'Stephen Birchmore',
      age: 51,
      startDate: new Date('1/1/2012'),
      endDate: new Date('6/15/2025'),
      department: DEPARTMENTS[3],
      jobTitle: JOB_TITLES['Customer Support'][3],
    },
    {
      name: 'First Last',
      age: 41,
      startDate: new Date('1/15/2014'),
      department: DEPARTMENTS[0],
      jobTitle: JOB_TITLES['Marketing'][2],
    },
    {
      name: 'Test Tester',
      age: 22,
      startDate: new Date('11/1/2019'),
      department: DEPARTMENTS[0],
      jobTitle: JOB_TITLES['Marketing'][2],
    },
    {
      name: 'Test Tester2',
      age: 23,
      startDate: new Date('11/1/2021'),
      department: DEPARTMENTS[1],
      jobTitle: JOB_TITLES['Sales'][1],
    },
  ];
  