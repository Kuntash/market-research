# Stitch Screen Design Brief

This file translates the current product direction into concrete screens for Stitch generation using the existing visual system in `DESIGN.md`, but with simpler, more practical product language.

## Screen System Overview

Design target:

- calm, dark, premium product UI
- balanced density, not sparse marketing and not cluttered terminal
- one strong accent only
- clear hierarchy
- visible but restrained motion
- no finance-casino aesthetics

## 1. Home Dashboard

### Purpose

Logged-in default screen showing a clean summary of what is happening across the watchlist right now.

### Core Layout

- left navigation rail on desktop
- top command bar with global search and date filter
- center 12-column dashboard
- bottom-center floating chat prompt dock

### Main Modules

- watchlist summary strip
- key movers or important updates
- latest news by watched stock
- social sentiment summary
- small market snapshot cards
- recent alerts rollup

### Visual Direction

- no overloaded heatmaps
- cards should feel editorial and laminated
- largest module should be the watchlist intelligence panel
- use typography for emphasis before charts

### Empty / Loading / Max Data

- empty state should clearly guide user to add first stock or create first research group
- loading state uses full-shape skeletons matching final layout
- max-data state should group by stock rather than turning into a dense spreadsheet

## 2. Home Empty State

### Purpose

First-time logged-in dashboard when the user has no watchlist items yet.

### Core Layout

- same dashboard shell as home
- central empty-state composition in the main content area
- compact side context panel explaining what the app tracks
- bottom-center chat dock stays visible but disabled or hint-only

### Main Modules

- primary CTA: add first stock
- secondary CTA: create research group
- simple preview tiles showing price, news, sentiment, and strategy tracking

### Visual Direction

- should feel motivating, not blank
- use one strong illustration or product mock tile, not many tiny cards
- keep messaging practical and friendly

## 3. Watchlists / Research Groups

### Purpose

Manage tracked stocks and the logical groups they belong to.

### Core Layout

- two-panel layout
- left side lists watchlists and research groups
- right side shows stocks inside the selected group
- sticky action area for add stock, add group, and reorder

### Main Modules

- group list
- stock table or tile list
- group metadata
- source coverage summary

### Visual Direction

- avoid heavy data table styling
- use structured rows with strong spacing and meaningful metadata
- support both single-stock watchlists and themed groups

## 4. Stock Detail / Research Workspace

### Purpose

Deep research screen for one stock.

### Core Layout

- three-zone desktop layout
- left rail for stock identity and quick jumps
- main center column for research summary and source-backed notes
- right rail for latest events, price context, and sentiment
- bottom-center fixed chat prompt

### Main Modules

- stock header
- price and move snapshot
- news timeline
- source-backed notes or report blocks
- sentiment overview
- event stream
- chat dock

### Visual Direction

- this should be the most focused screen in the product
- prioritize reading and scanning
- avoid overusing charts; use only the ones that help decision-making

## 5. Stock Chat / Knowledge Mode

### Purpose

Expanded conversational layer for asking questions against the internal knowledge base.

### Core Layout

- overlay sheet or dedicated panel depending on viewport
- persistent stock context at top
- message history in center
- source grounding and referenced facts in a side panel or expandable drawer
- input dock anchored bottom center

### Main Modules

- conversation history
- stock context chip
- source citations
- suggested follow-up prompts
- answer confidence or freshness cues

### Visual Direction

- should feel like a serious research assistant, not a generic chatbot
- keep the input obvious but not oversized
- answers should visually separate summary from supporting evidence

## 6. Alerts Feed

### Purpose

Show significant watchlist updates across news, internet mentions, and tracked sources.

### Core Layout

- sticky filter rail
- ranked alert stack
- optional grouped sections by stock or severity
- compact chat dock remains available

### Main Modules

- alert cards
- stock chips
- significance label
- why-this-matters summary
- source list

### Visual Direction

- prefer ranked narrative cards over noisy feed rows
- keep attention on important updates, not raw volume

## 7. Strategies List

### Purpose

Overview of all user strategies and their operational state.

### Core Layout

- left rail for sections
- top bar with create strategy action
- main content with strategy list and summary metrics
- right detail drawer or side panel for selected strategy snapshot

### Main Modules

- strategy list
- active / inactive status
- budget per strategy
- recent performance snapshot
- last run and last backtest summary

### Visual Direction

- serious product UI, not code playground chrome
- rows or cards should clearly communicate status and risk
- keep active strategies visually prominent

## 8. Strategy Builder / Code Editor

### Purpose

Create and edit a strategy, then save, run, deploy, or backtest it.

### Core Layout

- split workspace
- left side configuration and metadata
- right side code editor or script panel
- bottom action bar for save, run now, deploy, and backtest

### Main Modules

- strategy name and description
- language/runtime selector placeholder
- code editor
- budget config
- deploy controls
- run-now controls

### Visual Direction

- dark editor surface integrated into the product shell
- actions must feel deliberate and safe
- version and run context should always be visible

## 9. Strategy Backtest Results

### Purpose

Review historical performance for one strategy.

### Core Layout

- summary band at top
- chart region in center
- metrics grid below
- run history list or comparison panel

### Main Modules

- equity curve or core performance chart
- drawdown view
- returns summary
- trade count
- date range
- run comparison list

### Visual Direction

- analytical but not cramped
- numbers should use monospace
- support scanning before detail reading

## 10. Strategy Versions

### Purpose

Track revisions, compare versions, and restore or deploy a chosen version.

### Core Layout

- left version timeline
- main diff or summary panel
- right metadata panel

### Main Modules

- version list
- change summary
- deploy / restore actions
- author and timestamp metadata

### Visual Direction

- version control should feel calm and understandable
- avoid raw git-like overload unless explicitly needed

## 11. Integrations / Settings

### Purpose

Configure self-hosted settings, data sources, and trading API connections such as Groww.

### Core Layout

- category sidebar
- settings detail panel
- verification or connection status panel

### Main Modules

- Groww API connection
- source toggles
- crawler settings
- notification settings
- environment or deployment notes

### Visual Direction

- clean operational interface
- connection status must be easy to understand
- treat risky actions with stronger separation and confirmation styling

## Global Product UX Rules

- keep the bottom-center chat prompt available on the home dashboard and stock research screens
- every major screen must support empty, loading, and populated states
- dashboards should prefer grouped insight over raw ticker spam
- a new stock or strategy should appear immediately after creation
- mobile layouts collapse to one column without losing hierarchy
- avoid fake urgency badges, neon trading colors, or casino visual language

## Recommended Screen Generation Order

1. Home Dashboard
2. Home Empty State
3. Stock Detail / Research Workspace
4. Stock Chat / Knowledge Mode
5. Strategies List
6. Strategy Builder / Code Editor
7. Strategy Backtest Results
8. Watchlists / Research Groups
9. Alerts Feed
10. Strategy Versions
11. Integrations / Settings
