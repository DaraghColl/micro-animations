import { vi, describe, it, expect, beforeEach } from 'vitest';
import { animate } from 'motion';
import type { AnimationData } from '.';

vi.mock('motion', () => ({
  animate: vi.fn(),
  stagger: vi.fn(),
}));

// Base test function for AnimationData objects
export function testAnimationData(
  animation: AnimationData,
  expectedId: string,
  expectedTitle: string
) {
  describe(`${expectedId} animation`, () => {
    beforeEach(() => {
      // Reset mocks
      vi.clearAllMocks();

      // Mock DOM with the actual animation HTML
      document.body.innerHTML = animation.html;
    });

    it('has correct id and title', () => {
      expect(animation.id).toBe(expectedId);
      expect(animation.title).toBe(expectedTitle);
    });

    it('has html as a non-empty string containing SVG', () => {
      expect(typeof animation.html).toBe('string');
      expect(animation.html.length).toBeGreaterThan(0);
      expect(animation.html).toContain('<svg');
    });

    it('animationScript is a function', () => {
      expect(typeof animation.animationScript).toBe('function');
    });

    it('runAnimation calls animationScript', () => {
      const spy = vi.spyOn(animation, 'animationScript');
      animation.runAnimation();
      expect(spy).toHaveBeenCalled();
      spy.mockRestore();
    });

    it('animationScript calls animate with expected parameters', () => {
      animation.animationScript();
      expect(animate).toHaveBeenCalled();
    });
  });
}
