# Market Research PRD

## Product Summary

Market Research is a self-hostable web app for stock research, watchlist monitoring, knowledge-backed chat, and algo strategy execution. The product is designed for people who research before investing or trading but do not want to spend hours manually checking price moves, news, filings, and social chatter across many tabs and tools.

The core product promise is simple:

- Track what is happening across a watchlist in one calm dashboard
- Turn crawled news and source data into a usable knowledge base
- Let users ask questions against that knowledge base through chat
- Support strategy creation, backtesting, activation, budgeting, and deployment
- Keep the whole system practical, readable, and self-hostable

## Problem

Most retail and semi-technical users have a broken workflow:

- watch prices in one place
- read news in another
- track social sentiment somewhere else
- keep notes in docs
- test strategy ideas in scripts
- manually connect research to execution

This leads to context switching, missed signals, duplicated work, and poor follow-through from research to action.

## Target User

Primary user:

- a practical investor or trader who is not full-time
- wants current information without manually searching every source
- wants a structured research workflow before making decisions
- may want to run or experiment with algo strategies
- prefers control and self-hosting over black-box SaaS dependence

Secondary user:

- a technically inclined trader who wants strategy scripting, backtests, deployment controls, and API connectivity

## Product Principles

- No clutter
- No fake trading urgency
- No jargon-heavy UX
- Research first, execution second
- Every screen should answer a clear question
- The app should feel calm, fast, and trustworthy
- Empty states should guide the user toward the next valuable action

## Core Workflows

### 1. First-Time Setup

- user lands on marketing page
- user creates account
- user adds first stock or first research group
- user lands on empty-but-guided home dashboard
- user starts watchlist monitoring and research

### 2. Daily Home Usage

- user logs in
- user sees current watchlist overview
- user sees latest stock price, important news, and social/media sentiment
- user spots unusual movement or a relevant update
- user opens one stock for deeper research

### 3. Stock Research Workflow

- user opens a stock detail screen
- app shows research summary, recent events, price context, sentiment, and source-backed knowledge
- user uses bottom-center chat prompt to ask questions
- chat answers from the internal knowledge base built from crawled sources

### 4. Strategy Workflow

- user opens strategies section
- user creates a strategy
- strategy appears in the list immediately
- user edits code in a scripting ground
- user saves draft, backtests, runs immediately, or deploys
- user reviews version history and backtest performance
- user sets active or inactive status
- user sets budget per strategy

## Functional Scope

### Home Dashboard

Must show:

- watchlist stocks
- latest stock price or latest market snapshot
- latest relevant news
- basic social/media sentiment
- quick access to stock detail
- bottom-center chat prompt

First-time state:

- no watchlist data
- prominent call to add first stock or create first research group
- educational but compact explanation of what happens after setup

### Stock Detail / Research

Must show:

- stock header and quick stats
- recent price context
- latest news and source timeline
- sentiment summary
- research notes or AI summary
- knowledge-backed chat entry fixed near bottom center

### Chat / Knowledge Layer

Behavior:

- crawlers gather data from news and other configured sources
- data is transformed into a knowledge base
- chat queries use that knowledge base to answer questions
- answers should be tied to tracked stocks, time windows, and sources

### Strategies

Must support:

- strategy list
- create strategy
- code editor / scripting ground
- save
- run immediately
- deploy
- backtest
- version control / revision history
- active or inactive toggle
- budget per strategy
- performance review

## Screen Inventory

### 1. Landing Page

Purpose:

- explain the product simply
- show self-hosted research plus strategy value
- convert user into onboarding

### 2. Onboarding

Purpose:

- create account
- add first watchlist item or research group
- prepare first-run dashboard

### 3. Home Dashboard

Purpose:

- default logged-in view
- non-cluttered summary of what is happening across the watchlist

### 4. Home Empty State

Purpose:

- first-time dashboard with no stocks yet
- encourage add-first-stock or create-first-group action

### 5. Stock Detail / Research Workspace

Purpose:

- focus on one stock
- combine price, news, sentiment, research, and chat

### 6. Global Chat / Knowledge Prompt

Purpose:

- bottom-center prompt that is available in core research views
- ask questions against the knowledge base

### 7. Watchlists / Research Groups

Purpose:

- manage tracked stocks and logical groupings

### 8. Strategies List

Purpose:

- overview of all strategies, status, budgets, and recent performance

### 9. Strategy Builder / Editor

Purpose:

- write, save, run, deploy, and backtest strategy code

### 10. Strategy Versions & Backtests

Purpose:

- inspect revision history, compare runs, and review backtest output

### 11. Settings / Integrations

Purpose:

- manage source connectors, self-host settings, and trading API setup such as Groww

## MVP Priorities

Priority 1:

- landing page
- onboarding
- empty home
- populated home dashboard
- stock detail / research workspace
- bottom chat prompt

Priority 2:

- watchlists / research groups
- strategies list
- strategy editor
- backtest results

Priority 3:

- strategy version comparisons
- advanced integrations
- multi-source configuration depth

## UX Requirements

- dashboard must stay readable at a glance
- no dense trading-terminal clutter
- mobile should still feel premium and focused
- empty states should feel useful, not dead
- chat prompt should stay visually obvious but not noisy
- strategy flows should feel serious and structured, not toy-like

## Data Concepts

Key entities:

- User
- Watchlist
- Research Group
- Stock
- Source Event
- Knowledge Entry
- Chat Thread
- Strategy
- Strategy Version
- Backtest Run
- Budget Allocation
- Integration

## Success Criteria

- user can add first stock within minutes
- user can understand watchlist state at a glance
- user can ask a stock-specific question and get a grounded answer
- user can create a strategy and see it appear immediately
- user can backtest and understand whether a strategy should remain active

## Out of Scope For Initial Definition

- locking into a single strategy language
- advanced social features
- large marketplace behavior
- institutional-grade OMS complexity

## One-Line Positioning

A self-hostable market research and algo strategy app that helps users track stocks, understand what changed, ask grounded questions, and act from one clean workspace.
