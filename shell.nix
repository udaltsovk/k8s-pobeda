{pkgs ? import <nixpkgs> {}}: let
  packages = with pkgs; [
    bun
  ];
in
  with pkgs;
    mkShell {
      name = "k8svictory";
      buildInputs = packages;

      DIRENV_LOG_FORMAT = "";
    }
