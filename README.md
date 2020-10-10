# Demo for @angular-architects/module-federation

Please note, you **must** use **yarn** during the beta phase of CLI 11 b/c it allows to override dependencies to force the CLI into webpack 5.

# Usage

- Install packages: ``yarn``
- Start Micro Frontend (remote): ``ng serve mfe1 -o``
- Start Shell (host): ``ng serve shell -o``
- Make sure ``mfe1`` is started before ``shell``
- Use the hyperlink ``flights`` in the ``shell`` to load ``mfe1``