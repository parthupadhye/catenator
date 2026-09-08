# Run — Catenator app build/update

STOP. Before doing anything else:

1. Open and read the file at `apps/shared/RUN_TEMPLATE.md`, in full,
   right now.

2. Substitute these values:

PHASE = phase-0-single-topic
APP_DIR = apps/phase-0-single-topic/
OUTPUT_DIR = apps/phase-0-single-topic/output/
CONFIG_FILE = apps/phase-0-single-topic/prompts/build-config.yaml
COMPONENTS = ["components/input-mode-dual.yaml", "components/state-topic-refraction.yaml"]
FIXTURE_DIR = "fixtures/promotions/"

3. Execute every step in RUN_TEMPLATE.md literally, including its
   MANDATORY LAST STEP.

4. Do not report this build complete until the compliance report
   file actually exists on disk.