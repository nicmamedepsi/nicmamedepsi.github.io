import { Component, ChangeDetectionStrategy, computed, input } from '@angular/core';

type BlobColor = 'green' | 'pink' | 'yellow' | 'purple' | 'orange' | 'brand';
type BlobVariant = 'default' | 'slow' | 'static';

@Component({
    selector: 'app-blob',
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        'class': 'absolute rounded-full mix-blend-multiply filter blur-[80px] opacity-70',
        '[class]': 'dynamicClasses()',
        '[style.animation-delay]': 'delay()'
    }
})
export class BlobComponent {
    color = input<BlobColor>('brand');
    variant = input<BlobVariant>('default');
    delay = input<string>('0s');

    private colors: Record<BlobColor, string> = {
        green: "bg-spring-leaf/30",
        pink: "bg-spring-tulip/20",
        yellow: "bg-spring-sun/30",
        purple: "bg-spring-iris/20",
        orange: "bg-spring-poppy/30",
        brand: "bg-brand-300/30"
    };

    private animations: Record<BlobVariant, string> = {
        default: "animate-morph",
        slow: "animate-morph-slow",
        static: ""
    };

    protected dynamicClasses = computed(() => {
        return `${this.colors[this.color()]} ${this.animations[this.variant()]}`;
    });
}
