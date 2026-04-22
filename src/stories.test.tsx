import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { composeStories, type ReactRenderer } from '@storybook/react-vite';
import type { Store_CSFExports } from 'storybook/internal/types';

const storyModules = import.meta.glob('/src/**/*.stories.{ts,tsx}', {
    eager: true,
});

describe('Storybook snapshots', () => {
    it('should find at least one story file', () => {
        expect(Object.keys(storyModules).length).toBeGreaterThan(0);
    });

    Object.entries(storyModules).forEach(([filePath, module]) => {
        const stories = composeStories(module as Store_CSFExports<ReactRenderer, any>);

        Object.entries(stories).forEach((element) => {
            const storyName = element[0];
            const Story = element[1] as any;
            it(`${filePath} -  ${storyName} matches snapshot`, () => {
                const { container } = render(<Story />);
                expect(container.firstChild).toMatchSnapshot();
            });
        });
    });
});
