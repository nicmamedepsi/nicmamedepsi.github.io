import { Component, ChangeDetectionStrategy, computed, input } from '@angular/core';

type HighlightColor = 'yellow' | 'pink' | 'purple' | 'green';

@Component({
    selector: 'app-highlight',
    template: '<span [class]="dynamicClasses()"><ng-content></ng-content></span>',
    styles: [`:host { display: inline; }`],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HighlightComponent {
    color = input<HighlightColor>('yellow');

    private colors: Record<HighlightColor, string> = {
        yellow: "bg-spring-sun/20 text-stone-800",
        pink: "bg-spring-tulip/10 text-stone-800",
        purple: "bg-spring-iris/10 text-stone-800",
        green: "bg-brand-200/40 text-brand-900"
    };

    protected dynamicClasses = computed(() => {
        return `px-1 py-0.5 mx-0.5 rounded-md font-medium inline-block decoration-clone ${this.colors[this.color()]}`;
    });
}
