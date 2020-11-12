import { render, screen } from '@testing-library/react';
import NavBar from '../../components/NavBar';


test('Nav tag is defined', () => {
  const { container } = render(<NavBar />);
  const nav = container.querySelector('nav');
  expect(nav).toBeDefined;
});

test('NavBar have correct classes', () => {
    const { container } = render(<NavBar />);
    const expectedClasses = ['bg-yellow-base', 'text-black-base', "flex", 'flex-1', 'flex-row', "h-16", 'items-center', 'p-6', 'border-b-2', 'border-yellow-dark'];
    const nav = container.querySelector('nav');
    expect(nav.classList.length).toBe(expectedClasses.length);
    expectedClasses.forEach(function(expecteClass) {
        expect(nav.classList).toContain(expecteClass);
    });
    
});

test('NavBar contains title', () => {
    const { container } = render(<NavBar />);
    const nav = container.querySelector('nav');
    expect(nav.querySelector('h1#logo')).not.toBe(null);
})

test('NavBar contains menu', () => {
    const { container } = render(<NavBar />);
    const nav = container.querySelector('nav');
    expect(nav.querySelector('div#menu')).not.toBe(null);
})


