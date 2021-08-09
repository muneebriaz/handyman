import { Directive, ElementRef, Input } from '@angular/core';

const color: any = {
    10: 'darkred',
    20: 'orangered',
    30: 'orange',
    40: 'yellowgreen'
}

const level: any = {
    10: 'Too Weak',
    20: 'Weak',
    30: 'Medium',
    40: 'Strong'
}

@Directive({
    selector: '[passwordStrength]'
})
export class PasswordStrengthDirective {
    @Input() passwordStrength: any;

    constructor(private element: ElementRef) {
    }

    protected ngOnChanges() {
        if (this.passwordStrength) {
            let strength = this.checkStrength(this.passwordStrength);
            this.element.nativeElement.innerHTML = `Your Password is &nbsp;<b>${level[strength]}</b>`;
            this.element.nativeElement.style.color = `${color[strength]}`;
        } else {
            this.element.nativeElement.innerHTML = "";
        }
    }

    checkStrength(p: any) {
        // 1
        let force = 0;

        // 2
        const regex = /[$-/:-?{-~!"^_@`\[\]]/g;
        const lowerLetters = /[a-z]+/.test(p);
        const upperLetters = /[A-Z]+/.test(p);
        const numbers = /[0-9]+/.test(p);
        const symbols = regex.test(p);

        // 3
        const flags = [lowerLetters, upperLetters, numbers, symbols];

        // 4
        let passedMatches = 0;
        for (const flag of flags) {
            passedMatches += flag === true ? 1 : 0;
        }

        // 5
        force += 2 * p.length + ((p.length >= 10) ? 1 : 0);
        force += passedMatches * 10;

        // 6
        force = (p.length <= 6) ? Math.min(force, 10) : force;

        // 7
        force = (passedMatches === 1) ? Math.min(force, 10) : force;
        force = (passedMatches === 2) ? Math.min(force, 20) : force;
        force = (passedMatches === 3) ? Math.min(force, 30) : force;
        force = (passedMatches === 4) ? Math.min(force, 40) : force;

        return force;
    }

}