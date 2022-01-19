

export function cssUtil(classes: Array<string>): string {
    return classes.filter(x => !!x).join(' ');
}
