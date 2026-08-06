RG Changelog
############

All notable changes to this project will be documented in this file.

The format is based on `Keep a Changelog <https://keepachangelog.com/en/1.0.0/>`_,
and this project adheres to customized Semantic Versioning e.g.: `verawood-rg.1`

[Unreleased]
************

Changed:
========
* Upgraded the fork onto the Verawood baseline: ``@edx/frontend-platform`` ^8.7.0, ``@openedx/frontend-build`` ^14.6.6, ``@edx/brand`` ^1.2.3, ``react``/``react-dom`` ^18.3.1 (VERA-6)
* Bumped ``@edx/frontend-component-header`` to ^8.2.1 — the build-time override installs the RG fork at 8.2.2, which ^6.2.0 could never resolve to (VERA-6)
* CI runs on Node 24 (was 20), via ``.nvmrc`` (VERA-6)
* Declared ``PARAGON_THEME_URLS`` in ``.env``, ``.env.development`` and ``.env.test``, as every sibling MFE does (VERA-6)
* Render through React 18's ``createRoot`` instead of the deprecated ``ReactDOM.render`` (VERA-6)
* Refreshed ``@openedx/paragon`` within its existing range, bringing it in line with the sibling MFEs (VERA-6)

Fixed:
======
* ``.eslintrc.js`` and ``jest.config.js`` required the legacy ``@edx/frontend-build``, which the fork does not install — lint and the test suite could not run at all (VERA-6)
* Refreshed the stale ``OrderHistoryPage`` snapshot, which predated the current Paragon pagination markup (VERA-6)

Removed:
========
* ``@edx/brand`` SCSS imports from ``index.scss`` — Verawood serves the brand from a CDN via ``PARAGON_THEME_URLS`` (VERA-6)
* codecov CI action — the fork has no codecov project, so the step failed every run (VERA-6)

[release/teak-rg.3] - 2026-02-27
********************************
[release/teak-rg.2]
*******************
[release/teak-rg.1] - 2025-08-06
********************************

Added:
======
* Upgrade frontend-app-ecommerce for Design Tokens (TEA-109)
* Implemented head component for SEO title and favicon

Fixed:
======
* Get correct value for ECOMMERCE_ORDERS_API_URL from config
* Remove "edX" from page title
* Ignored runtime config: fixed order history services getOrders (RGInt-353)
* Fix DataTable cells vertical alignment (RGOeX-26438)
