# DRRSE v4.2 Prompts for Google AI Studio

## Quick Start Guide

### Option 1: Single Master Prompt (Recommended for most users)

**File**: `DRRSE_v4.2_Single_Master_Prompt.txt`

This is the easiest way to get started. Copy the entire contents of this file into a new Google AI Studio conversation.

**Setup Steps:**
1. Create new conversation in Google AI Studio
2. Copy entire `DRRSE_v4.2_Single_Master_Prompt.txt` into the system prompt
3. Enable tools: web_search, code_execution, pdf_parser, visualization
4. Start with your research topic

**Best for:**
- Single-session research
- Quick setup
- All-in-one approach

---

### Option 2: Dual Master Prompts (Advanced)

**Files**: 
- `DRRSE_v4.2_Backend_Master_Prompt.txt`
- `DRRSE_v4.2_Frontend_Master_Prompt.txt`

This separates the system into backend (logic) and frontend (UX) components.

**Setup Steps:**
1. Create Conversation 1: Backend
   - Copy `DRRSE_v4.2_Backend_Master_Prompt.txt` as system prompt
   - Enable all tools
   - Name it "DRRSE Backend"

2. Create Conversation 2: Frontend
   - Copy `DRRSE_v4.2_Frontend_Master_Prompt.txt` as system prompt
   - Enable display/interaction tools
   - Name it "DRRSE Frontend"

3. Coordinate between conversations via shared storage/state

**Best for:**
- Complex research workflows
- Custom UX requirements
- Separated concerns

---

## What Each File Contains

### Core Prompts

| File | Purpose | When to Use |
|------|---------|-------------|
| `DRRSE_v4.2_Single_Master_Prompt.txt` | Complete system in one prompt | Recommended for most users |
| `DRRSE_v4.2_Backend_Master_Prompt.txt` | Phase execution engine | Backend of dual-prompt setup |
| `DRRSE_v4.2_Frontend_Master_Prompt.txt` | UX and interaction manager | Frontend of dual-prompt setup |

### Documentation Files (Parent Directory)

| File | Contents |
|------|----------|
| `DRRSE_v4.2_Master_Project_Document.md` | Complete system documentation |
| `DRRSE_v4.2_Expanded_Phases_4-7.md` | Detailed technical specifications |
| `DRRSE_v4.2_Google_AI_Studio_Prompts.md` | All prompts with explanations |

---

## Key Features

### Dual-Regime System
- **Exploratory (Phases 0-3)**: Honor hunches, symbolic thinking, sparse data OK
- **Validation (Phases 4-7)**: Bayesian rigor, confidence authority, structural validation

### Parallel Agents (Phase 5)
- **ADV** (Adversarial): Find contradictions and gaps
- **EVO** (Evolutionary): Generate hypothesis variants with GA
- **ND** (Neurodivergent): Alternative cognitive perspectives (firewalled)
- **SYS** (Systems): Feedback loop and pathology detection

### Safety Mechanisms
- **Confidence Authority**: Only Phase 6 can mutate confidence
- **Pattern Freeze**: No new patterns after Phase 4
- **Shadow Monitor**: Divergence detection with alternate models
- **Epistemic Budget**: Prevents runaway speculation

### Neurodivergent-Friendly UX
- **ADHD-Safe**: Phase closure statements, discrete progress, focus anchors
- **Aphasia-Safe**: Fragment reconstruction, multiple choice clarification
- **No Mid-Run Interruption**: Streaming only during automation
- **Retroactive Controls**: Post-phase handles for clarification and testing

---

## Phase Overview

| Phase | Name | Regime | Authority | Key Output |
|-------|------|--------|-----------|------------|
| 0 | Onboarding | Exploratory | Suggest confidence | Initial research context |
| 1 | Method Extraction | Exploratory | Suggest confidence | Methods + patterns |
| 2 | Micro-Mechanisms | Exploratory | Suggest confidence | Verified claims + simulations |
| 3 | Macro-Genealogy | Exploratory | Suggest confidence | Genealogy + posteriors |
| 4 | Derivation Lock | Validation | Structure validity | Locked derivation graph |
| 5 | Parallel Agents | Validation | Side-channels | Agent findings + diffs |
| 6 | Synthesis | Validation | **CONFIDENCE MUTATION** | Final synthesis |
| 7 | Finalization | Validation | Style transforms | Multi-voice exports |
| Post | Archival | Validation | Meta-learning | Next session prep |

---

## Configuration Required

### Google AI Studio Tools
- ✅ web_search (general search)
- ✅ code_execution (Python/R)
- ✅ pdf_parser (document processing)
- ✅ visualization (auto-charts)

### Optional but Recommended
- Memory persistence (for session resume)
- File attachment capability
- Long context window (for complex research)

---

## Troubleshooting

### Common Issues

**"System stuck in loop"**
- Check epistemic budget > 0.2
- Verify no surprise events blocking progress
- Review shadow alerts

**"Confidence not updating"**
- Confirm you're in Phase 6 (only phase with authority)
- Check for shadow alerts preventing updates

**"Pattern detection not working"**
- Patterns freeze after Phase 4 (by design)
- Only re-scoring/deprecation allowed in Phase 6

**"Agents timing out"**
- Normal for complex problems
- Partial outputs are preserved
- System continues with available results

---

## Tips for Success

1. **Start Simple**: Begin with single master prompt
2. **Expect Exploration**: 20% speculative is by design
3. **Trust the Process**: Phases are automated for a reason
4. **Use Retroactive Handles**: Clarify, stress-test, alt-voice after phases
5. **Resume Sessions**: Don't lose progress - use checkpoint system
6. **Monitor Confidence**: Qualitative display shows structural vs intuitive

---

## Research Context Examples

**Good Starting Inputs:**
- "I'm exploring connections between Fludd's symbolism and Kepler's math"
- "Looking for patterns in ancient language evolution"
- "Testing hypothesis about DMT binding to gold nanoparticles"
- "Tracing historical development of systems thinking"

**Fragment Inputs (OK):**
- "fludd kepler ratio geometric patterns"
- "cold fusion resonant surface binding"
- "language annunciation ancient"
- "symbolic systems resonance"

The system will reconstruct and clarify your intent.

---

## Support & Feedback

This system is designed for:
- Users who think in symbols, systems, and patterns
- Researchers exploring speculative hypotheses
- Neurodivergent users needing cognitive support
- Anyone wanting rigorous validation of intuitive insights

The dual-regime approach ensures your exploratory thinking is honored while 
maintaining the structural rigor needed for reliable results.

---

*Happy Researching!*
