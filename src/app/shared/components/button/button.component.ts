import { Component, computed, input } from '@angular/core';

type ButtonVariant = 'primary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

@Component({
    selector: 'button[app-button], a[app-button]',
    standalone: true,
    template: '<ng-content></ng-content>',
    host: {
        'class': 'inline-flex items-center justify-center rounded-full font-medium transition-all focus:outline-none focus:ring-2 focus:ring-spring-iris focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-95 cursor-pointer',
        '[class]': 'dynamicClasses()'
    }
})
export class ButtonComponent {
    variant = input<ButtonVariant>('primary');
    size = input<ButtonSize>('md');
    fullWidth = input<boolean | string>(false); // Handle boolean attribute

    private variants: Record<ButtonVariant, string> = {
        primary: "bg-spring-iris text-white hover:bg-violet-700 shadow-sm shadow-spring-iris/30",
        outline: "border border-spring-iris text-spring-iris hover:bg-spring-iris/5",
        ghost: "text-brand-700 hover:bg-brand-50 hover:text-brand-800",
    };

    private sizes: Record<ButtonSize, string> = {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-base",
        lg: "h-14 px-8 text-lg",
    };

    protected dynamicClasses = computed(() => {
        const isFull = this.fullWidth() === '' || this.fullWidth() === 'true' || this.fullWidth() === true;
        return `${this.variants[this.variant()]} ${this.sizes[this.size()]} ${isFull ? 'w-full' : ''}`;
    });
}
