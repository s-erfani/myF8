import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatPaginator} from '@angular/material/paginator';
import {AnswerBoxComponent} from '../../shared/answer-box/answer-box.component';
import {Router} from '@angular/router';
import {LevelService} from '../../services/level.service';

export interface Element {
  symbol: string;
  name: string;
  atomicNumber: number | string;
  phase: string;
}

const elements: Element[] = [
  {
    symbol: "H",
    name: "Hydrogen",
    atomicNumber: 1,
    phase: "Gas"
  },
  {
    symbol: "He",
    name: "Helium",
    atomicNumber: 2,
    phase: "Gas"
  },
  {
    symbol: "Li",
    name: "Lithium",
    atomicNumber: 3,
    phase: "Solid"
  },
  {
    symbol: "Be",
    name: "Beryllium",
    atomicNumber: 4,
    phase: "Solid"
  },
  {
    symbol: "B",
    name: "Boron",
    atomicNumber: 5,
    phase: "Solid"
  },
  {
    symbol: "C",
    name: "Carbon",
    atomicNumber: 6,
    phase: "Solid"
  },
  {
    symbol: "N",
    name: "Nitrogen",
    atomicNumber: 7,
    phase: "Gas"
  },
  {
    symbol: "O",
    name: "Oxygen",
    atomicNumber: 8,
    phase: "Gas"
  },
  {
    symbol: "F",
    name: "Fluorine",
    atomicNumber: 9,
    phase: "Gas"
  },
  {
    symbol: "Ne",
    name: "Neon",
    atomicNumber: 10,
    phase: "Gas"
  },
  {
    symbol: "Na",
    name: "Sodium",
    atomicNumber: '*11*',
    phase: "Solid"
  },
  {
    symbol: "Mg",
    name: "Magnesium",
    atomicNumber: 12,
    phase: "Solid"
  },
  {
    symbol: "Al",
    name: "Aluminium",
    atomicNumber: 13,
    phase: "Solid"
  },
  {
    symbol: "Si",
    name: "Silicon",
    atomicNumber: 14,
    phase: "Solid"
  },
  {
    symbol: "P",
    name: "Phosphorus",
    atomicNumber: 15,
    phase: "Solid"
  },
  {
    symbol: "S",
    name: "Sulfur",
    atomicNumber: 16,
    phase: "Solid"
  },
  {
    symbol: "Cl",
    name: "Chlorine",
    atomicNumber: 17,
    phase: "Gas"
  },
  {
    symbol: "Ar",
    name: "Argon",
    atomicNumber: 18,
    phase: "Gas"
  },
  {
    symbol: "K",
    name: "Potassium",
    atomicNumber: 19,
    phase: "Solid"
  },
  {
    symbol: "Ca",
    name: "Calcium",
    atomicNumber: 20,
    phase: "Solid"
  },
  {
    symbol: "Sc",
    name: "Scandium",
    atomicNumber: 21,
    phase: "Solid"
  },
  {
    symbol: "Ti",
    name: "Titanium",
    atomicNumber: 22,
    phase: "Solid*75*"
  },
  {
    symbol: "V",
    name: "Vanadium",
    atomicNumber: 23,
    phase: "Solid"
  },
  {
    symbol: "Cr",
    name: "Chromium",
    atomicNumber: 24,
    phase: "Solid"
  },
  {
    symbol: "Mn",
    name: "Manganese",
    atomicNumber: 25,
    phase: "Solid"
  },
  {
    symbol: "Fe",
    name: "Iron",
    atomicNumber: 26,
    phase: "Solid"
  },
  {
    symbol: "Co",
    name: "Cobalt",
    atomicNumber: 27,
    phase: "Solid"
  },
  {
    symbol: "Ni",
    name: "Nickel",
    atomicNumber: 28,
    phase: "Solid"
  },
  {
    symbol: "Cu",
    name: "Copper",
    atomicNumber: 29,
    phase: "Solid"
  },
  {
    symbol: "Zn",
    name: "Zinc",
    atomicNumber: 30,
    phase: "Solid"
  },
  {
    symbol: "Ga",
    name: "Gallium",
    atomicNumber: 31,
    phase: "Solid"
  },
  {
    symbol: "Ge",
    name: "Germanium",
    atomicNumber: 32,
    phase: "Solid"
  },
  {
    symbol: "As",
    name: "Arsenic",
    atomicNumber: 33,
    phase: "Solid"
  },
  {
    symbol: "Se",
    name: "Selenium",
    atomicNumber: 34,
    phase: "Solid"
  },
  {
    symbol: "Br",
    name: "Bromine",
    atomicNumber: 35,
    phase: "Liquid"
  },
  {
    symbol: "Kr",
    name: "Krypton",
    atomicNumber: 36,
    phase: "Gas"
  },
  {
    symbol: "Rb",
    name: "Rubidium",
    atomicNumber: 37,
    phase: "Solid"
  },
  {
    symbol: "Sr",
    name: "Strontium",
    atomicNumber: 38,
    phase: "Solid"
  },
  {
    symbol: "Y",
    name: "Yttrium",
    atomicNumber: 39,
    phase: "Solid"
  },
  {
    symbol: "Zr",
    name: "Zirconium",
    atomicNumber: 40,
    phase: "Solid"
  },
  {
    symbol: "Nb",
    name: "Niobium",
    atomicNumber: 41,
    phase: "Solid"
  },
  {
    symbol: "Mo",
    name: "Molybdenum",
    atomicNumber: 42,
    phase: "Solid"
  },
  {
    symbol: "Tc",
    name: "Technetium",
    atomicNumber: 43,
    phase: "Solid"
  },
  {
    symbol: "Ru",
    name: "Ruthenium",
    atomicNumber: 44,
    phase: "Solid"
  },
  {
    symbol: "Rh",
    name: "Rhodium",
    atomicNumber: 45,
    phase: "Solid"
  },
  {
    symbol: "Pd",
    name: "Palladium",
    atomicNumber: 46,
    phase: "Solid"
  },
  {
    symbol: "Ag",
    name: "Silver",
    atomicNumber: 47,
    phase: "Solid"
  },
  {
    symbol: "Cd",
    name: "Cadmium",
    atomicNumber: 48,
    phase: "Solid"
  },
  {
    symbol: "In",
    name: "Indium",
    atomicNumber: 49,
    phase: "Solid"
  },
  {
    symbol: "Sn",
    name: "Tin",
    atomicNumber: 50,
    phase: "Solid"
  },
  {
    symbol: "Sb",
    name: "Antimony",
    atomicNumber: 51,
    phase: "Solid"
  },
  {
    symbol: "Te",
    name: "Tellurium",
    atomicNumber: 52,
    phase: "Solid"
  },
  {
    symbol: "I",
    name: "Iodine",
    atomicNumber: 53,
    phase: "Solid"
  },
  {
    symbol: "Xe",
    name: "Xenon",
    atomicNumber: 54,
    phase: "Gas"
  },
  {
    symbol: "Cs",
    name: "Cesium",
    atomicNumber: 55,
    phase: "Solid"
  },
  {
    symbol: "Ba",
    name: "Barium",
    atomicNumber: 56,
    phase: "Solid"
  },
  {
    symbol: "La",
    name: "Lanthanum",
    atomicNumber: 57,
    phase: "Solid"
  },
  {
    symbol: "Ce",
    name: "Cerium",
    atomicNumber: 58,
    phase: "Solid"
  },
  {
    symbol: "Pr",
    name: "Praseodymium",
    atomicNumber: 59,
    phase: "Solid"
  },
  {
    symbol: "Nd",
    name: "Neodymium",
    atomicNumber: 60,
    phase: "Solid"
  },
  {
    symbol: "Pm",
    name: "Promethium",
    atomicNumber: 61,
    phase: "Solid"
  },
  {
    symbol: "Sm",
    name: "Samarium",
    atomicNumber: 62,
    phase: "Solid"
  },
  {
    symbol: "Eu",
    name: "Europium",
    atomicNumber: 63,
    phase: "Solid"
  },
  {
    symbol: "Gd",
    name: "Gadolinium",
    atomicNumber: 64,
    phase: "Solid"
  },
  {
    symbol: "Tb",
    name: "Terbium",
    atomicNumber: 65,
    phase: "Solid"
  },
  {
    symbol: "Dy",
    name: "Dysprosium",
    atomicNumber: 66,
    phase: "Solid"
  },
  {
    symbol: "Ho",
    name: "Holmium",
    atomicNumber: 67,
    phase: "Solid"
  },
  {
    symbol: "Er",
    name: "Erbium",
    atomicNumber: 68,
    phase: "Solid"
  },
  {
    symbol: "Tm",
    name: "Thulium",
    atomicNumber: 69,
    phase: "Solid"
  },
  {
    symbol: "Yb",
    name: "Ytterbium",
    atomicNumber: 70,
    phase: "Solid"
  },
  {
    symbol: "Lu",
    name: "Lutetium",
    atomicNumber: 71,
    phase: "Solid"
  },
  {
    symbol: "Hf",
    name: "Hafnium",
    atomicNumber: 72,
    phase: "Solid"
  },
  {
    symbol: "Ta",
    name: "Tantalum",
    atomicNumber: 73,
    phase: "Solid"
  },
  {
    symbol: "W",
    name: "Tungsten",
    atomicNumber: 74,
    phase: "Solid"
  },
  {
    symbol: "Re",
    name: "Rhenium",
    atomicNumber: 75,
    phase: "Solid"
  },
  {
    symbol: "Os",
    name: "Osmium",
    atomicNumber: 76,
    phase: "Solid"
  },
  {
    symbol: "Ir",
    name: "Iridium",
    atomicNumber: 77,
    phase: "Solid"
  },
  {
    symbol: "Pt",
    name: "Platinum",
    atomicNumber: 78,
    phase: "Solid"
  },
  {
    symbol: "Au",
    name: "Gold",
    atomicNumber: 79,
    phase: "Solid"
  },
  {
    symbol: "Hg",
    name: "Mercury",
    atomicNumber: 80,
    phase: "Liquid"
  },
  {
    symbol: "Tl",
    name: "Thallium",
    atomicNumber: 81,
    phase: "Solid"
  },
  {
    symbol: "Pb",
    name: "Lead",
    atomicNumber: 82,
    phase: "Solid"
  },
  {
    symbol: "Bi",
    name: "Bismuth",
    atomicNumber: 83,
    phase: "Solid"
  },
  {
    symbol: "Po",
    name: "Polonium",
    atomicNumber: 84,
    phase: "Solid"
  },
  {
    symbol: "At",
    name: "Astatine",
    atomicNumber: 85,
    phase: "Solid"
  },
  {
    symbol: "Rn",
    name: "Radon*13*",
    atomicNumber: 86,
    phase: "Gass"
  },
  {
    symbol: "Fr",
    name: "Francium",
    atomicNumber: 87,
    phase: "Solid"
  },
  {
    symbol: "Ra",
    name: "Radium",
    atomicNumber: 88,
    phase: "Solid"
  },
  {
    symbol: "Ac",
    name: "Actinium",
    atomicNumber: 89,
    phase: "Solid"
  },
  {
    symbol: "Th",
    name: "Thorium",
    atomicNumber: 90,
    phase: "Solid"
  },
  {
    symbol: "Pa",
    name: "Protactinium",
    atomicNumber: 91,
    phase: "Solid"
  },
  {
    symbol: "U",
    name: "Uranium",
    atomicNumber: 92,
    phase: "Solid"
  },
  {
    symbol: "Np",
    name: "Neptunium",
    atomicNumber: 93,
    phase: "Solid"
  },
  {
    symbol: "Pu",
    name: "Plutonium",
    atomicNumber: 94,
    phase: "Solid"
  },
  {
    symbol: "Am",
    name: "Americium",
    atomicNumber: 95,
    phase: "Solid"
  },
  {
    symbol: "Cm",
    name: "Curium",
    atomicNumber: 96,
    phase: "Solid"
  },
  {
    symbol: "Bk",
    name: "Berkelium",
    atomicNumber: 97,
    phase: "Solid"
  },
  {
    symbol: "Cf",
    name: "Californium",
    atomicNumber: 98,
    phase: "Solid"
  },
  {
    symbol: "Es",
    name: "Einsteinium",
    atomicNumber: 99,
    phase: "Solid"
  },
  {
    symbol: "Fm",
    name: "Fermium",
    atomicNumber: 100,
    phase: "Solid"
  },
  {
    symbol: "Md",
    name: "Mendelevium",
    atomicNumber: 101,
    phase: "Solid"
  },
  {
    symbol: "No",
    name: "Nobelium",
    atomicNumber: 102,
    phase: "Solid"
  },
  {
    symbol: "Lr",
    name: "Lawrencium",
    atomicNumber: 103,
    phase: "Solid"
  },
  {
    symbol: "Rf",
    name: "Rutherfordium",
    atomicNumber: 104,
    phase: "Solid"
  },
  {
    symbol: "Db",
    name: "Dubnium",
    atomicNumber: 105,
    phase: "Solid"
  },
  {
    symbol: "Sg",
    name: "Seaborgium",
    atomicNumber: 106,
    phase: "Solid"
  },
  {
    symbol: "Bh",
    name: "Bohrium",
    atomicNumber: 107,
    phase: "Solid"
  },
  {
    symbol: "Hs",
    name: "Hassium",
    atomicNumber: 108,
    phase: "Solid"
  },
  {
    symbol: "Mt*26*",
    name: "Meitnerium",
    atomicNumber: 109,
    phase: "Solid"
  },
  {
    symbol: "Ds",
    name: "Darmstadtium",
    atomicNumber: 110,
    phase: "Solid"
  },
  {
    symbol: "Rg",
    name: "Roentgenium",
    atomicNumber: 111,
    phase: "Solid"
  },
  {
    symbol: "Cn",
    name: "Copernicium",
    atomicNumber: 112,
    phase: "Liquid"
  },
  {
    symbol: "Nh",
    name: "Nihonium",
    atomicNumber: 113,
    phase: "Solid"
  },
  {
    symbol: "Fl",
    name: "Flerovium",
    atomicNumber: 114,
    phase: "Solid"
  },
  {
    symbol: "Mc",
    name: "Moscovium",
    atomicNumber: 115,
    phase: "Solid"
  },
  {
    symbol: "Lv",
    name: "Livermorium",
    atomicNumber: 116,
    phase: "Solid"
  },
  {
    symbol: "Ts",
    name: "Tennessine",
    atomicNumber: 117,
    phase: "Solid"
  },
  {
    symbol: "Og",
    name: "Oganesson",
    atomicNumber: 118,
    phase: "Solid"
  }
]

@Component({
  selector: 'app-level8',
  imports: [
    MatFormFieldModule, MatInputModule, MatTableModule, MatPaginator, AnswerBoxComponent,
  ],
  templateUrl: './level8.component.html',
  styleUrl: './level8.component.css'
})

export class Level8Component implements AfterViewInit {
  displayedColumns: string[] = ['symbol', 'name', 'atomicNumber', 'phase'];
  dataSource = new MatTableDataSource(elements);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  textFieldValue: string = "";

  constructor(private router: Router, private readonly levelService: LevelService) {
  }

  onSubmit(): void {

    if (this.textFieldValue.toLowerCase().trim() == "13751126") {
      this.levelService.completeLevel(8);
      this.router.navigate(['/']);
    }
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
