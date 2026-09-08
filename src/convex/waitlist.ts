import { v } from "convex/values";
import { internalMutation, mutation } from "./_generated/server";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Public mutation: join the OmniVeo waitlist. Idempotent per email. */
export const joinWaitlist = mutation({
  args: {
    email: v.string(),
    source: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const email = args.email.trim().toLowerCase();
    if (!EMAIL_PATTERN.test(email) || email.length > 254) {
      throw new Error("Please enter a valid email address.");
    }

    const existing = await ctx.db
      .query("waitlist")
      .withIndex("by_email", (q) => q.eq("email", email))
      .first();

    if (existing) {
      return { ok: true as const, alreadyJoined: true };
    }

    await ctx.db.insert("waitlist", {
      email,
      source: args.source ?? "landing-hero",
      createdAt: Date.now(),
    });

    return { ok: true as const, alreadyJoined: false };
  },
});

/**
 * Internal helper used by other functions (e.g. a future admin digest).
 * Returns the total number of waitlist signups.
 */
export const countWaitlist = internalMutation({
  args: {},
  handler: async (ctx) => {
    const all = await ctx.db.query("waitlist").collect();
    return all.length;
  },
});
