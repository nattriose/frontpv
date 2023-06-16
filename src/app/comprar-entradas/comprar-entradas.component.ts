import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-comprar-entradas',
  templateUrl: './comprar-entradas.component.html',
  styleUrls: ['./comprar-entradas.component.css']
})
export class ComprarEntradasComponent implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    const circuitoSelect = this.elementRef.nativeElement.querySelector('#circuito');
    const tipoEntradaSelect = this.elementRef.nativeElement.querySelector('#tipo-entrada');
    const embarcacionGroup = this.elementRef.nativeElement.querySelector('#embarcacion-group');

    circuitoSelect.addEventListener("change", () => {
      const selectedOption = circuitoSelect.value;
      if (selectedOption === "genesis") {
        embarcacionGroup.style.display = "block";
      } else {
        tipoEntradaSelect.value = "general";
        embarcacionGroup.style.display = "none";
      }
    });
  }
}
