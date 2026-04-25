---
name: image-prompt
description: >
  Generate optimized prompts for Google's Nano Banana image generators (Nano Banana 2
  and Nano Banana Pro). Use when the user invokes /image-prompt or asks to create, write,
  craft, or generate a prompt for Nano Banana, Gemini image generation, or AI image
  creation. Also triggers when the user says "image prompt", "nano banana prompt",
  "nano banana 2", or "help me describe an image".
---

# Nano Banana Prompt Generator

## Overview

This skill helps craft optimized prompts for Google's Nano Banana image generators.
It gathers user vision through targeted questions, builds natural-language prompts
following Google's guidance, and supports iterative refinement.

## Key Principles

**Natural language over keywords**: Write briefs like you're instructing a human artist, not listing tags.

**Specificity matters**: Define subjects with materiality, texture, and precise details rather than generic descriptors.

**Context clarifies intent**: Mentioning the use case (website hero, social media, print) helps the model infer appropriate lighting, composition, and professionalism level.

**Edit conversationally**: Request specific changes to mostly-correct outputs rather than regenerating from scratch.

## Model Comparison

| Feature | Nano Banana 2 (Flash) | Nano Banana Pro |
|---------|----------------------|-----------------|
| Speed | Fast | Slower |
| Fidelity | Good | Maximum |
| Resolution | 512px - 4K | High-res |
| Reference images | 5 characters / 14 objects | 14 reference images |
| Best for | Rapid iteration, everyday use | Maximum detail, real-world accuracy |

## Workflow

### Step 1: Gather Vision
Ask 2-3 targeted questions covering:
- **Subject**: What is the main focus?
- **Setting**: Where does this take place?
- **Mood/Style**: What feeling should it evoke?
- **Composition**: How should elements be arranged?
- **Lighting**: What time of day, light quality?
- **Purpose**: Where will this image be used?
- **Text**: Any text to render in the image?
- **Resolution**: What quality level is needed?

### Step 2: Build the Prompt
Construct using natural language with:
- Cinematic camera terminology (shot types, lenses, depth of field)
- Specific materials and textures
- Color direction and palette
- Clear action and pose descriptions
- Lighting quality and direction

### Step 3: Present with Rationale
Show the crafted prompt in a marked block and explain why each element was chosen.

### Step 4: Offer Refinement
Iterate until satisfied. Use conversational editing for adjustments.

## Leverageable Capabilities

- **Reference images**: Upload images for style/character consistency
- **Conversational editing**: Request natural-language adjustments post-generation
- **Text rendering**: Place exact text in quotation marks (max ~25 characters)
- **Dimensional translation**: Convert sketches to renders, floor plans to 3D
- **Structural control**: Upload layout sketches to control composition

## The 6-Component Reasoning Brief

| Component | Weight | Focus |
|-----------|--------|-------|
| Subject | 40% | Age, skin tone, hair, expression, body type, outfit details |
| Style | 25% | Camera specs, film stock, brand references, textures |
| Context | 15% | Location, time of day, weather, supporting elements |
| Composition | 10% | Shot type, framing, focal length, depth of field |
| Lighting | 10% | Direction, quality, color temperature, shadows |

## Anti-Patterns to Avoid

- Disconnected keyword lists ("beautiful, 8K, masterpiece")
- Vague subjects ("a person in a place")
- Missing mood/lighting information
- Absent context for the use case
- Contradictory over-prompting
- Negative prompts (Gemini doesn't support them - use positive framing)

## Positive Framing (No Negative Prompts)

- Instead of "no blur" -> "sharp, in-focus, tack-sharp detail"
- Instead of "no people" -> "empty, deserted, uninhabited"
- Instead of "no text" -> "clean, uncluttered, text-free"
- Instead of "not dark" -> "brightly lit, high-key lighting"

## Example Prompt (Product Photography)

"A flat lay of artisanal coffee beans spilling from a matte black ceramic cup onto
a weathered oak table, soft directional window light from the upper left, warm earth
tones with deep shadows, shot from directly above, styled for a premium coffee brand's
Instagram feed."
