import { useState, useEffect, useCallback } from "react";

const FAVORITES_KEY = "og-maker-template-favorites";
const RECENTS_KEY = "og-maker-template-recents";
const MAX_RECENTS = 8;

interface RecentTemplate {
  id: string;
  timestamp: number;
}

export function useTemplatePreferences() {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [recents, setRecents] = useState<RecentTemplate[]>([]);

  // Load initial state
  useEffect(() => {
    try {
      const savedFavorites = localStorage.getItem(FAVORITES_KEY);
      if (savedFavorites) {
        setFavorites(JSON.parse(savedFavorites));
      }

      const savedRecents = localStorage.getItem(RECENTS_KEY);
      if (savedRecents) {
        setRecents(JSON.parse(savedRecents));
      }
    } catch (e) {
      console.error("Failed to load template preferences", e);
    }
  }, []);

  // Save favorites
  useEffect(() => {
    try {
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
    } catch (e) {
      console.error("Failed to save template favorites", e);
    }
  }, [favorites]);

  // Save recents
  useEffect(() => {
    try {
      localStorage.setItem(RECENTS_KEY, JSON.stringify(recents));
    } catch (e) {
      console.error("Failed to save template recents", e);
    }
  }, [recents]);

  const toggleFavorite = useCallback((id: string) => {
    setFavorites((prev) => {
      if (prev.includes(id)) {
        return prev.filter((favId) => favId !== id);
      }
      return [...prev, id];
    });
  }, []);

  const isFavorite = useCallback(
    (id: string) => {
      return favorites.includes(id);
    },
    [favorites]
  );

  const recordRecent = useCallback((id: string) => {
    setRecents((prev) => {
      const filtered = prev.filter((recent) => recent.id !== id);
      const newRecent = { id, timestamp: Date.now() };
      return [newRecent, ...filtered].slice(0, MAX_RECENTS);
    });
  }, []);

  const getRecentIds = useCallback(() => {
    return recents.map((r) => r.id);
  }, [recents]);

  const getFavorites = useCallback(() => {
    return favorites;
  }, [favorites]);

  return {
    toggleFavorite,
    isFavorite,
    recordRecent,
    getRecentIds,
    getFavorites,
  };
}
