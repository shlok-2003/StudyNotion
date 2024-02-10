const CodeData: string[][] = [
    [
        '<!DOCTYPE html>',
        '<html lang="en">',
        '<head>',
        '   <title>Example</title>',
        '</head>',
        '<body>',
        '   <nav class="header">',
        '       <a>One</a>',
        '       <a>Two</a>',
        '   </nav>',
        '</body>',
        '</html>',
    ],
    [
        '#include <bits/stdc++.h>',
        'using namespace std;',
        'int main() {',
        '   int t',
        '   cin >> t;',
        '   while (t--) {',
        '       int a, b;',
        '       cin >> a >> b;',
        '       cout << __gcd(a, b) << endl;',
        '   }',
        '   return 0;',
        '}',
    ],
];

export default CodeData;