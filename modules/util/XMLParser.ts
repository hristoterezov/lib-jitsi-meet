/**
 * Minimal DOM helper used in place of jQuery. Implements only the
 * functionality required by the project.
 */

class DomWrapper {
    private elements: Element[];

    constructor(el: string | Element | Document | Element[] | NodeList | DomWrapper) {
        if (el instanceof DomWrapper) {
            this.elements = [ ...el.elements ];
        } else if (typeof el === 'string') {
            const doc = new DOMParser().parseFromString(el, 'text/xml');

            this.elements = [ doc.documentElement ];
        } else if (el instanceof Document) {
            this.elements = [ el.documentElement ];
        } else if (el instanceof Element) {
            this.elements = [ el ];
        } else if (el instanceof NodeList || Array.isArray(el)) {
            this.elements = Array.from(el as any);
        } else {
            this.elements = [];
        }
    }

    find(selector: string): DomWrapper {
        let subSelector = selector;
        let firstOnly = false;

        if (selector.endsWith(':first')) {
            subSelector = selector.slice(0, -6);
            firstOnly = true;
        }

        const result: Element[] = [];

        for (const el of this.elements) {
            const found = Array.from(el.querySelectorAll(subSelector));

            if (firstOnly && found.length) {
                result.push(found[0]);
            } else {
                result.push(...found);
            }
        }

        return new DomWrapper(result);
    }

    attr(name: string): string | null {
        return this.elements[0]?.getAttribute(name) ?? null;
    }

    text(): string {
        return this.elements[0]?.textContent ?? '';
    }

    each(callback: (index: number, el: Element) => void): void {
        this.elements.forEach((el, i) => callback(i, el));
    }

    filter(callback: (index: number, el: Element) => boolean): DomWrapper {
        return new DomWrapper(this.elements.filter((el, i) => callback(i, el)));
    }

    get length(): number {
        return this.elements.length;
    }

    [Symbol.iterator](): Iterator<Element> {
        return this.elements[Symbol.iterator]();
    }
}

interface IJQueryLike {
    (el: string | Element | Document | Element[] | NodeList | DomWrapper): DomWrapper;
    parseXML: (xml: string) => Document;
}

const $ = ((el: string | Element | Document | Element[] | NodeList | DomWrapper) => new DomWrapper(el)) as IJQueryLike;

$.parseXML = function(xml: string): Document {
    return new DOMParser().parseFromString(xml, 'text/xml');
};

export default $;
