"use client";

import { useState } from "react";

export default function AddLocationPage() {
  const [name, setName] = useState("");
  const [locationText, setLocationText] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/add-location", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          location: locationText, // 'location' key in DB
          description,
          rating: parseFloat(rating),
        }),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const result = await response.json();
      console.log("Server response:", result);

      // Reset the form if needed
      setName("");
      setLocationText("");
      setDescription("");
      setRating("");

      alert("Location added successfully!");
    } catch (error) {
      console.error("Error adding location:", error);
      alert("Failed to add location.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main style={{ maxWidth: 400, margin: "0 auto", padding: 20 }}>
      <h1>Add a New Location</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 10 }}>
          <label style={{ display: "block", marginBottom: 5 }}>
            Name:
          </label>
          <input
            type="text"
            placeholder="e.g. My Favorite Spot"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{ width: "100%", padding: 8 }}
          />
        </div>

        <div style={{ marginBottom: 10 }}>
          <label style={{ display: "block", marginBottom: 5 }}>
            Location (string or address):
          </label>
          <input
            type="text"
            placeholder="e.g. 1234 Main St"
            value={locationText}
            onChange={(e) => setLocationText(e.target.value)}
            required
            style={{ width: "100%", padding: 8 }}
          />
        </div>

        <div style={{ marginBottom: 10 }}>
          <label style={{ display: "block", marginBottom: 5 }}>
            Description:
          </label>
          <textarea
            placeholder="A short description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{ width: "100%", padding: 8, height: 80 }}
          />
        </div>

        <div style={{ marginBottom: 10 }}>
          <label style={{ display: "block", marginBottom: 5 }}>
            Rating (0 to 5):
          </label>
          <input
            type="number"
            step="0.1"
            min="0"
            max="5"
            placeholder="4.5"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            style={{ width: "100%", padding: 8 }}
          />
        </div>

        <button type="submit" disabled={loading} style={{ padding: "8px 16px" }}>
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </main>
  );
}
