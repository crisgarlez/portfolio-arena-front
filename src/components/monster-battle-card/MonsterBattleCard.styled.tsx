import styled from "@emotion/styled";
import {
  Card,
  LinearProgress,
  linearProgressClasses,
  Typography,
  Divider,
} from "@mui/material";
import { colors } from "../../constants/colors";

export const BattleMonsterCard = styled(Card, {
  shouldForwardProp: (prop) => prop !== "centralized",
})<{ centralized?: boolean }>(({ centralized }) => ({
  padding: "11px 12px",
  width: "calc(307px - 22px)",
  height: "415px",
  background: colors.white,
  boxShadow: "-2px 3px 10px rgba(0, 0, 0, 0.25)",
  borderRadius: "7px",
  display: centralized ? "flex" : "auto",
  alignItems: centralized ? "center" : "auto",
  justifyContent: centralized ? "center" : "auto",
  flexDirection: "column",
}));

export const BattleMonsterTitle = styled(Typography)(() => ({
  fontFamily: "Roboto",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "36px",
  lineHeight: "42px",
  color: colors.black,
}));

export const BattleMonsterStat = styled(Typography)(() => ({
  fontFamily: "Roboto",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "12px",
  lineHeight: "14px",
  color: colors.black,
  marginTop: "11px  ",
}));

export const BattleMonsterDivider = styled(Divider)(() => ({
  marginTop: "5px",
  color: colors.lightGray,
}));

export const BattleMonsterImage = styled.img(() => ({
  borderRadius: "7px",
  paddingTop: "0px",
  width: "100%",
  height: "50%",
}));

export const ProgressBar = styled(LinearProgress)(() => ({
  height: 8,
  borderRadius: 15,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: colors.progressBarBackground,
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 15,
    backgroundColor: colors.progressColor,
  },
  marginTop: "5px",
}));
