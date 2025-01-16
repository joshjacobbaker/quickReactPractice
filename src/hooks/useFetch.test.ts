// filepath: /Users/joshuabaker/Code/quickReactPractice/src/hooks/useFetch.test.ts
import { renderHook, act, waitFor } from '@testing-library/react'

import useFetch from './useFetch';

// Mock the fetch function
global.fetch = jest.fn(() =>
    Promise.resolve({
        ok: true,
        json: () => Promise.resolve([{ id: 1, title: 'Test Title', body: 'Test Body' }]),
    })
) as jest.Mock;

interface ExampleData {
    id: number;
    title: string;
    body: string;
}

describe('useFetch', () => {
    it('should fetch data successfully', async () => {
        const { result } = renderHook(() => useFetch<ExampleData[]>('https://jsonplaceholder.typicode.com/posts'));
        expect(result.current.loading).toBe(true);
        expect(result.current.data).toBeNull();
        expect(result.current.error).toBeNull();
        
        await waitFor(() => expect(result.current.loading).toBe(false))

        // After fetching, loading should be false and data should be populated
        expect(result.current.loading).toBe(false);
        expect(result.current.data).toEqual([{ id: 1, title: 'Test Title', body: 'Test Body' }]);
        expect(result.current.error).toBeNull();
    });

    it('should handle fetch error', async () => {
        // Mock fetch to return an error
        global.fetch = jest.fn(() =>
            Promise.resolve({
                ok: false,
                statusText: 'Not Found',
            })
        ) as jest.Mock;

        const { result } = renderHook(() => useFetch<ExampleData[]>('https://jsonplaceholder.typicode.com/posts'));
        await waitFor(() => expect(result.current.loading).toBe(false))

        // After fetching, loading should be false and error should be populated
        expect(result.current.loading).toBe(false);
        expect(result.current.data).toBeNull();
        expect(result.current.error).toBe('Network response was not ok');
    });
});