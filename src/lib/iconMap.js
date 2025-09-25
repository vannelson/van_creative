"use client";

import InfoIcon from "@mui/icons-material/Info";
import DescriptionIcon from "@mui/icons-material/Description";
import WorkIcon from "@mui/icons-material/Work";
import ArticleIcon from "@mui/icons-material/Article";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import CodeIcon from "@mui/icons-material/Code";
import DnsIcon from "@mui/icons-material/Dns";
import StorageIcon from "@mui/icons-material/Storage";
import AutoModeIcon from "@mui/icons-material/AutoMode";
import BugReportIcon from "@mui/icons-material/BugReport";
import CloudDoneIcon from "@mui/icons-material/CloudDone";

const icons = {
  Info: InfoIcon,
  Description: DescriptionIcon,
  Work: WorkIcon,
  Article: ArticleIcon,
  ContactMail: ContactMailIcon,
  Code: CodeIcon,
  Dns: DnsIcon,
  Storage: StorageIcon,
  AutoMode: AutoModeIcon,
  BugReport: BugReportIcon,
  CloudDone: CloudDoneIcon,
};

export function getIcon(name, props) {
  const Cmp = icons[name];
  if (!Cmp) return null;
  return <Cmp {...props} />;
}

