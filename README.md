# AXIOM Protocol 

> A decentralized, privacy-preserving proof-of-existence and document notary protocol built on Stellar's Soroban network.

## Overview
Founders, creators, and developers lack a fast, indisputable, and cheap method to prove the existence and state of a specific file at a specific time. Traditional IP and notary systems are slow, centralized, and expensive. 

Axiom solves this by providing a trustless web utility where users can drag and drop a file, generate a cryptographic hash strictly on the client side (preserving data privacy), and anchor that hash to the Stellar blockchain via a Soroban smart contract. 

## Stellar Ecosystem Integration 
Axiom is actively participating in the **Drips Stellar Wave** program. The core of this protocol relies heavily on the Stellar ecosystem:
* **Smart Contracts (Soroban & Rust):** The underlying ledger is a lightweight Soroban contract functioning as a highly optimized Key-Value store to record SHA-256 hashes, timestamps, and creator addresses.
* **Network Interfacing:** Utilization of the `@stellar/stellar-sdk` for submitting transactions and querying the immutable verification log.
* **Wallet Integration:** Native support for the **Freighter** wallet for contract invocation and signing.

## Architecture & Engineering Standards

Axiom adheres to strict engineering guidelines to ensure a pristine open-source codebase for contributors. 

**Frontend (Next.js / React / Tailwind CSS)**
* **Component Composition:** We enforce strict component composition over complex conditional rendering and prop-drilling. UI elements are highly modular and decoupled from protocol logic.
* **Design System:** The UI follows a strict Brutalist architectural aesthetic. We prioritize structural layouts, monochromatic palettes, and typography-driven data feeds over generic gradients and bloated web3 templates.
* **Privacy-First:** File hashing is executed locally in the browser. Raw files are never transmitted or stored on external servers.

**Backend / On-Chain (Soroban / Rust)**
* Lightweight map structures.
* Immutable ledger design with minimal compute overhead.

## Roadmap & Open Bounties (Stellar Wave)
We are actively sourcing contributors for the following milestones via the Drips Wave platform:

- [ ] **Bounty:** Implement the core Soroban contract for Hash Map storage.
- [ ] **Bounty:** Integrate Freighter wallet connection and state management.
- [ ] **Bounty:** Implement client-side SHA-256 file hashing logic.
- [ ] **Bounty:** Connect the Next.js frontend to the Soroban RPC to display the Verification Log.

## Contributing
We welcome contributions from the Stellar and Drips community. 
1. Fork the repository.
2. Review our `.clauderules` file in the root directory for strict formatting, architectural guidelines, and design constraints before submitting a PR.
3. Claim an open issue via the Drips platform.
4. Submit a PR targeting the `main` branch.
