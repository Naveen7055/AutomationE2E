export  default = {
  require: ["./step-definitions/*.js"],
  format: ["html"], // ✅ Use "html" instead of "pretty"
  paths: ["./features/*.feature"],
  timeout: 60000
};

