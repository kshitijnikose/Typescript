type RolePermissions = Record<"admin" | "user" | "guest", string>;

const permissions: RolePermissions = {
  admin: "all-access",
  user: "read-write",
  guest: "read-only",
};

console.log(permissions);
